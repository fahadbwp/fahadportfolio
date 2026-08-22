import React, { useState, useEffect } from 'react';
import { getStoredPosts, type BlogPost } from '../data/blogData';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, X, Sparkles, Check, Search, Tag, Lock } from 'lucide-react';

interface ArticlesPageProps {
  onBackToHome: () => void;
  onNavigateToAdmin?: () => void;
  initialSlug?: string | null;
}

export const ArticlesPage: React.FC<ArticlesPageProps> = ({
  onBackToHome,
  onNavigateToAdmin,
  initialSlug
}) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    const loaded = getStoredPosts();
    setPosts(loaded);

    if (initialSlug) {
      const match = loaded.find((p) => p.slug === initialSlug || p.id === initialSlug);
      if (match) {
        setSelectedPost(match);
      }
    }
  }, [initialSlug]);

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5] font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-900 px-6 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-white text-black font-mono font-bold text-xs flex items-center justify-center">
              FS
            </span>
            <span className="font-serif font-bold text-sm text-white hidden sm:inline">
              Fahad Saleem / Blog
            </span>
          </div>

          <div className="flex items-center gap-4">
            {onNavigateToAdmin && (
              <button
                onClick={onNavigateToAdmin}
                className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-emerald-400 transition-colors cursor-pointer"
                title="Admin CMS"
              >
                <Lock className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Admin CMS</span>
              </button>
            )}

            <button
              onClick={onBackToHome}
              className="text-xs font-mono uppercase text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              Contact & Hire →
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 py-16 text-left space-y-12">
        
        {/* Header Hero */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            // research & insights hub
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            Lead Generation & Data Blueprints.
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            In-depth technical guides on B2B prospecting, zero-bounce verification, Shopify e-commerce data extraction, and CRM hygiene.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-950 border border-neutral-900">
          
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles & keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                selectedTag === null
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              All ({posts.length})
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-emerald-500 text-black font-semibold'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>

        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => {
                setSelectedPost(post);
                window.location.hash = `#blog/${post.slug}`;
              }}
              className="group cursor-pointer flex flex-col justify-between p-6 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 transition-all duration-300 space-y-6 hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                {/* Cover Image */}
                <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-neutral-900">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-neutral-800 text-[10px] font-mono text-emerald-400 uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Read Article Link */}
              <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                <span>Read complete guide</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </main>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0a] animate-in fade-in duration-200">
          
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-900 px-6 sm:px-8 py-4 flex items-center justify-between max-w-4xl mx-auto">
            <button
              onClick={() => {
                setSelectedPost(null);
                window.location.hash = '#blog';
              }}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </button>

            <button
              onClick={() => {
                setSelectedPost(null);
                window.location.hash = '#blog';
              }}
              className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-pointer"
              aria-label="Close Article"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12 space-y-10 text-left">
            
            {/* Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="text-emerald-400 uppercase tracking-widest">{selectedPost.category}</span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-400">{selectedPost.date}</span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-400">{selectedPost.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-white leading-tight">
                {selectedPost.title}
              </h1>
              <p className="text-base text-neutral-300 font-light leading-relaxed border-l-2 border-emerald-500/50 pl-4 italic">
                {selectedPost.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="overflow-hidden rounded-2xl border border-neutral-800 aspect-[16/9] bg-neutral-950">
              <img
                src={selectedPost.coverImage}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="space-y-6 text-neutral-300 font-sans leading-relaxed text-base">
              {selectedPost.content.map((paragraph, i) => {
                if (paragraph.startsWith('### ')) {
                  const heading = paragraph.replace('### ', '').split('\\n')[0];
                  const body = paragraph.replace(`### ${heading}\\n`, '');
                  return (
                    <div key={i} className="pt-4 space-y-2">
                      <h2 className="text-xl font-bold text-white font-serif">{heading}</h2>
                      {body && <p className="text-neutral-300 text-sm leading-relaxed">{body}</p>}
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-neutral-900 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-neutral-500 uppercase mr-2 flex items-center gap-1">
                <Tag className="w-3 h-3" /> Tags:
              </span>
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Box & CTA */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-left">
                <div className="text-xs font-mono text-emerald-400 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Written by Fahad Saleem
                </div>
                <div className="text-sm font-semibold text-white">Lead Generation & Data Specialist</div>
                <p className="text-xs text-neutral-400">
                  Building verified B2B/B2C pipelines with zero bounce rate guarantee.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPost(null);
                  onBackToHome();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all shrink-0 cursor-pointer"
              >
                <span>Request Sample Leads</span>
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Footer with subtle admin link */}
      <footer className="border-t border-neutral-900 py-8 px-6 max-w-6xl mx-auto flex items-center justify-between text-xs font-mono text-neutral-500">
        <span>© {new Date().getFullYear()} Fahad Saleem. All rights reserved.</span>
        {onNavigateToAdmin && (
          <button
            onClick={onNavigateToAdmin}
            className="text-neutral-600 hover:text-neutral-400 transition-colors cursor-pointer"
          >
            [Admin]
          </button>
        )}
      </footer>
    </div>
  );
};
