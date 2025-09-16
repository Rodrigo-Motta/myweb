
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Publication from "./pages/Publication";
import Conferences from "./pages/Conferences";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { getRouterBasename } from "./utils/routerBase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={getRouterBasename()}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/work" element={<Work />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
