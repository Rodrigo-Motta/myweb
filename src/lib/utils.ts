

export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]): string {
  return inputs
    .filter(Boolean)
    .map(input => {
      if (typeof input === 'string') {
        return input;
      }
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([_, condition]) => condition)
          .map(([className]) => className)
          .join(' ');
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
}

