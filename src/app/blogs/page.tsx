import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Sample blog data - replace with your actual blog posts
const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Apps with Next.js",
    date: "2025-01-15",
    preview: "Exploring the power of Next.js for creating fast, SEO-friendly web applications with server-side rendering and static site generation.",
    slug: "building-modern-web-apps-nextjs"
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    date: "2025-01-08",
    preview: "Discussing best practices for writing maintainable, readable code that your future self (and your teammates) will thank you for.",
    slug: "art-of-clean-code"
  },
  {
    id: 3,
    title: "Responsive Design Principles",
    date: "2025-01-01",
    preview: "Understanding how to create websites that look great on all devices, from mobile phones to desktop computers.",
    slug: "responsive-design-principles"
  }
];

export default function Blogs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-normal text-gray-800 mb-8 text-center">
            Blog Posts
          </h1>
          
          <div className="space-y-8">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white/20 rounded-lg p-6 hover:bg-white/30 transition-colors border border-gray-200/30"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-2 md:mb-0">
                      <Link 
                        href={`/blogs/${post.slug}`}
                        className="hover:text-gray-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <time className="text-sm text-gray-500 md:ml-4 flex-shrink-0">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {post.preview}
                  </p>
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="inline-block mt-4 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                  >
                    Read more →
                  </Link>
                </article>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No blog posts yet. Check back soon for new content!
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}