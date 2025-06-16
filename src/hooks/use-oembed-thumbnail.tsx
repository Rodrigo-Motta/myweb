import * as React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface ProviderEndpoint {
  schemes?: string[]
  url: string
}

interface CompiledEndpoint extends ProviderEndpoint {
  regexes: RegExp[]
}

function globToRegExp(glob: string): RegExp {
  const escaped = glob.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')
  return new RegExp('^' + escaped + '$')
}

function compileCatalog(data: { endpoints: ProviderEndpoint[] }[]): CompiledEndpoint[] {
  const result: CompiledEndpoint[] = []
  for (const provider of data) {
    for (const ep of provider.endpoints) {
      result.push({
        ...ep,
        regexes: (ep.schemes ?? []).map(globToRegExp),
      })
    }
  }
  return result
}

const catalogPromise: Promise<CompiledEndpoint[]> =
  typeof window === 'undefined'
    ? Promise.resolve([])
    : fetch('https://oembed.com/providers.json')
        .then((r) => {
          if (!r.ok) throw new Error('Failed to load oEmbed providers')
          return r.json()
        })
        .then((json) => compileCatalog(json))
        .catch(() => [])

function buildEndpointUrl(template: string, source: string): string {
  const filled = template.replace('{format}', 'json').replace('{?format}', '?format=json')
  const url = new URL(filled)
  if (!url.searchParams.has('url')) {
    url.searchParams.set('url', source)
  }
  return url.toString()
}

export function useOEmbedThumbnail(url: string) {
  const [thumbnail, setThumbnail] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    if (!url || typeof window === 'undefined') {
      setThumbnail(null)
      setError(null)
      setLoading(false)
      return
    }

    const controller = new AbortController()
    setThumbnail(null)
    setError(null)
    setLoading(true)

    ;(async () => {
      try {
        const catalog = await catalogPromise
        const endpoint = catalog.find((ep) => ep.regexes.some((re) => re.test(url)))
        if (!endpoint) throw new Error('No oEmbed provider found')
        const endpointUrl = buildEndpointUrl(endpoint.url, url)

        const timeout = setTimeout(() => controller.abort(), 5000)
        const res = await fetch(endpointUrl, { signal: controller.signal })
        clearTimeout(timeout)
        if (!res.ok) throw new Error('Invalid oEmbed response')
        const ct = res.headers.get('content-type') || ''
        if (!ct.includes('json')) throw new Error('Expected JSON')
        const data = await res.json()
        let thumb: string | null = null
        if (typeof data.thumbnail_url === 'string') thumb = data.thumbnail_url
        else if (data.type === 'photo' && typeof data.url === 'string') thumb = data.url
        else if (data.image && typeof data.image.url === 'string') thumb = data.image.url
        setThumbnail(thumb)
      } catch (err: any) {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err : new Error(String(err)))
          setThumbnail(null)
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    })()

    return () => controller.abort()
  }, [url])

  return { thumbnail, loading, error }
}

export const OEmbedThumbnail: React.FC<{
  url: string
  alt?: string
  className?: string
  style?: React.CSSProperties
}> = ({ url, alt = '', className, style }) => {
  const { thumbnail, loading, error } = useOEmbedThumbnail(url)

  if (loading) return <Skeleton className={className} style={style} />
  if (error || !thumbnail) return null
  return <img src={thumbnail} alt={alt} className={className} style={style} />
}

/* DEMO
import { OEmbedThumbnail } from '@/hooks/use-oembed-thumbnail'

export const DemoThumbnails = () => (
  <div className="flex gap-4">
    <OEmbedThumbnail
      url="https://medium.com/@rodrigodamottacc/using-pre-trained-transformers-for-semantic-analysis-of-self-report-measures-in-psychology-a-fc412d5bbb5e"
      alt="Medium article"
      className="w-48 h-48 object-cover"
    />
    <OEmbedThumbnail
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      alt="YouTube video"
      className="w-48 h-48 object-cover"
    />
  </div>
)
*/
