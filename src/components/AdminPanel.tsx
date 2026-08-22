import React, { useState, useEffect } from 'react';
import {
  getStoredPosts,
  saveStoredPosts,
  getGitHubConfig,
  saveGitHubConfig,
  syncPostsToGitHub,
  type BlogPost,
  type GitHubConfig
} from '../data/blogData';
import {
  Lock,
  Plus,
  Edit2,
  Trash2,
  Save,
  ArrowLeft,
  Check,
  AlertCircle,
  Eye,
  Sparkles,
  RefreshCw,
  Sliders,
  Code
} from 'lucide-react';

interface AdminPanelProps {
  onBackToHome: () => void;
  onNavigateToBlog: () => void;
}

const DEFAULT_PASSWORD = 'Fahad#1122';

export const AdminPanel: React.FC<AdminPanelProps> = ({ onBackToHome, onNavigateToBlog }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // GitHub Settings State
  const [showGithubModal, setShowGithubModal] = useState(false);
  const [githubConfig, setGithubConfig] = useState<GitHubConfig>({
    token: '',
    owner: '',
    repo: '',
    branch: 'main'
  });
  const [syncStatus, setSyncStatus] = useState<{ loading: boolean; message: string; success?: boolean } | null>(null);

  // Form State for Create/Edit
  const [formTitle, setFormTitle] = useState('');
  const [formSlug, setFormSlug] = useState('');
  const [formCategory, setFormCategory] = useState('Lead Generation Strategy');
  const [formTags, setFormTags] = useState('B2B Prospecting, Sales Navigator, Email Deliverability');
  const [formReadTime, setFormReadTime] = useState('5 min read');
  const [formCoverImage, setFormCoverImage] = useState('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formContent, setFormContent] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('fahad_admin_authenticated');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
    const loadedPosts = getStoredPosts();
    setPosts(loadedPosts);

    const savedGit = getGitHubConfig();
    if (savedGit) {
      setGithubConfig(savedGit);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError(false);
      localStorage.setItem('fahad_admin_authenticated', 'true');
    } else {
      setAuthError(true);
    }
  };


  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('fahad_admin_authenticated');
  };

  const startCreateNew = () => {
    setEditingPost(null);
    setIsCreatingNew(true);
    setFormTitle('');
    setFormSlug('');
    setFormCategory('Lead Generation Strategy');
    setFormTags('B2B Leads, Sales Navigator, Apollo.io');
    setFormReadTime('4 min read');
    setFormCoverImage('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop');
    setFormExcerpt('');
    setFormContent('Write your article content here.\n\n### Step 1: Heading Title\nExplain the core method and process here.\n\n### Step 2: Next Section\nAdd key takeaways and actionable tips.');
    setPreviewMode(false);
  };

  const startEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreatingNew(false);
    setFormTitle(post.title);
    setFormSlug(post.slug);
    setFormCategory(post.category);
    setFormTags(post.tags.join(', '));
    setFormReadTime(post.readTime);
    setFormCoverImage(post.coverImage);
    setFormExcerpt(post.excerpt);
    setFormContent(post.content.join('\n\n'));
    setPreviewMode(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (val: string) => {
    setFormTitle(val);
    if (!editingPost) {
      setFormSlug(generateSlug(val));
    }
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const tagArray = formTags.split(',').map((t) => t.trim()).filter(Boolean);
    const contentArray = formContent.split('\n\n').map((p) => p.trim()).filter(Boolean);

    const postObj: BlogPost = {
      id: editingPost ? editingPost.id : `post-${Date.now()}`,
      slug: formSlug.trim() || generateSlug(formTitle),
      title: formTitle.trim(),
      excerpt: formExcerpt.trim(),
      date: editingPost ? editingPost.date : new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      readTime: formReadTime.trim() || '4 min read',
      category: formCategory.trim() || 'General',
      tags: tagArray,
      coverImage: formCoverImage.trim() || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      content: contentArray
    };

    let updatedList: BlogPost[];
    if (editingPost) {
      updatedList = posts.map((p) => (p.id === editingPost.id ? postObj : p));
    } else {
      updatedList = [postObj, ...posts];
    }

    setPosts(updatedList);
    saveStoredPosts(updatedList);
    setIsCreatingNew(false);
    setEditingPost(null);

    // Auto-sync to GitHub if configured
    if (githubConfig.token && githubConfig.owner && githubConfig.repo) {
      setSyncStatus({ loading: true, message: 'Syncing changes to GitHub repository...' });
      const result = await syncPostsToGitHub(updatedList, githubConfig);
      setSyncStatus({ loading: false, message: result.message, success: result.success });
      setTimeout(() => setSyncStatus(null), 5000);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    saveStoredPosts(updated);

    if (githubConfig.token && githubConfig.owner && githubConfig.repo) {
      setSyncStatus({ loading: true, message: 'Deleting from GitHub...' });
      const result = await syncPostsToGitHub(updated, githubConfig);
      setSyncStatus({ loading: false, message: result.message, success: result.success });
      setTimeout(() => setSyncStatus(null), 5000);
    }
  };

  const handleSaveGithubConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    saveGitHubConfig(githubConfig);
    setShowGithubModal(false);
    setSyncStatus({ loading: true, message: 'Testing GitHub connection & committing posts...' });
    const result = await syncPostsToGitHub(posts, githubConfig);
    setSyncStatus({ loading: false, message: result.message, success: result.success });
    setTimeout(() => setSyncStatus(null), 6000);
  };

  // 1. Password Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
        <div className="max-w-md w-full p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6 shadow-2xl text-left">
          
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-bold font-serif text-white">Admin CMS Login</h1>
            <p className="text-xs text-neutral-400 font-sans">
              Enter your master password to create, edit, and publish blog articles.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-neutral-500">Master Password</label>
              <input
                type="password"
                required
                placeholder="Enter password..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Incorrect master password. Access denied.</span>
              </div>
            )}


            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Unlock Admin Panel
            </button>
          </form>

          <div className="pt-2 text-center">
            <button
              onClick={onBackToHome}
              className="text-xs font-mono text-neutral-500 hover:text-white transition-colors"
            >
              ← Back to Portfolio
            </button>
          </div>

        </div>
      </div>
    );
  }

  // 2. Editor Mode (Create / Edit Post)
  if (isCreatingNew || editingPost) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans text-left pb-20">
        
        {/* Editor Top Bar */}
        <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-neutral-900 px-6 sm:px-8 py-4 flex items-center justify-between max-w-6xl mx-auto">
          <button
            onClick={() => {
              setIsCreatingNew(false);
              setEditingPost(null);
            }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Discard & Back to Articles</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              className="px-3.5 py-1.5 rounded-md border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-emerald-400" />
              <span>{previewMode ? 'Editor View' : 'Live Preview'}</span>
            </button>

            <button
              onClick={handleSavePost}
              className="px-5 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{editingPost ? 'Update & Publish' : 'Publish Article'}</span>
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 sm:px-8 py-10">
          {previewMode ? (
            <div className="space-y-8 animate-in fade-in-50 duration-200">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Preview Mode — How clients and Google see your article</span>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{formCategory}</div>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">{formTitle || 'Untitled Article'}</h1>
                <p className="text-neutral-400 italic border-l-2 border-emerald-500/50 pl-4">{formExcerpt}</p>
              </div>

              {formCoverImage && (
                <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-neutral-800">
                  <img src={formCoverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-4 text-neutral-300 leading-relaxed text-sm sm:text-base">
                {formContent.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSavePost} className="space-y-6">
              
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-500">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How to Generate High-Converting B2B Leads in 2026..."
                  value={formTitle}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-base font-semibold text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">URL Slug *</label>
                  <input
                    type="text"
                    required
                    placeholder="how-to-generate-b2b-leads-2026"
                    value={formSlug}
                    onChange={(e) => setFormSlug(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">Category</label>
                  <input
                    type="text"
                    placeholder="Lead Generation Strategy"
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">Tags (Comma Separated)</label>
                  <input
                    type="text"
                    placeholder="B2B Prospecting, Sales Navigator, Shopify"
                    value={formTags}
                    onChange={(e) => setFormTags(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">Read Time</label>
                  <input
                    type="text"
                    placeholder="5 min read"
                    value={formReadTime}
                    onChange={(e) => setFormReadTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-500">Cover Image URL</label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formCoverImage}
                  onChange={(e) => setFormCoverImage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-500">Short Excerpt (SEO Summary) *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="A concise 1-2 sentence summary for Google search and article cards..."
                  value={formExcerpt}
                  onChange={(e) => setFormExcerpt(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-500">Full Article Content (Markdown / Paragraphs) *</label>
                <textarea
                  required
                  rows={14}
                  placeholder="Write full article here. Use ### Heading for sub-sections..."
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-neutral-200 focus:outline-none focus:border-white transition-colors font-mono leading-relaxed"
                />
              </div>

            </form>
          )}
        </main>
      </div>
    );
  }

  // 3. Admin Main Dashboard
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans text-left">
      
      {/* Admin Top Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-neutral-900 px-6 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-emerald-400" />
              <span>Back to Site</span>
            </button>
            <span className="text-neutral-700">|</span>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Admin CMS</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowGithubModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5 text-emerald-400" />
              <span>{githubConfig.token ? 'GitHub Connected ✓' : 'Connect GitHub'}</span>
            </button>

            <button
              onClick={onNavigateToBlog}
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              View Blog Page →
            </button>

            <button
              onClick={handleLogout}
              className="text-xs font-mono text-red-400 hover:text-red-300 transition-colors cursor-pointer ml-2"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Sync Status Banner */}
      {syncStatus && (
        <div className={`py-2 px-6 text-center text-xs font-mono flex items-center justify-center gap-2 ${
          syncStatus.loading ? 'bg-neutral-900 text-neutral-300' : syncStatus.success ? 'bg-emerald-500/20 text-emerald-300 border-b border-emerald-500/30' : 'bg-amber-500/20 text-amber-300'
        }`}>
          {syncStatus.loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : syncStatus.success ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
          <span>{syncStatus.message}</span>
        </div>
      )}

      {/* Dashboard Body */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 py-12 space-y-10">
        
        {/* Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Articles Manager</h1>
            <p className="text-xs text-neutral-400 font-sans">
              Create, edit, and manage articles. All changes are saved locally and synced to GitHub automatically.
            </p>
          </div>

          <button
            onClick={startCreateNew}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all cursor-pointer shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Write New Article</span>
          </button>
        </div>

        {/* Posts Table / List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-5 rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-900 shrink-0 border border-neutral-800">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                    <span>{post.category}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-500">{post.date}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{post.title}</h3>
                  <p className="text-xs text-neutral-400 line-clamp-1 max-w-xl font-light">{post.excerpt}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                <button
                  onClick={() => startEdit(post)}
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                  title="Edit Article"
                >
                  <Edit2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Edit</span>
                </button>

                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-red-400 hover:text-red-300 hover:border-red-500/40 transition-all text-xs font-mono cursor-pointer"
                  title="Delete Article"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* GitHub Config Modal */}
      {showGithubModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-150">
          <div className="max-w-lg w-full p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6 shadow-2xl text-left">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-serif font-bold text-xl">
                  <Code className="w-5 h-5 text-emerald-400" />
                  <span>GitHub Repository Sync</span>
                </div>
                <button
                  onClick={() => setShowGithubModal(false)}
                  className="text-xs font-mono text-neutral-500 hover:text-white"
                >
                  ✕ Close
                </button>
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Connect your GitHub Personal Access Token. Whenever you publish or delete an article, it will automatically commit directly to your GitHub repo and trigger a live Netlify build!
              </p>
            </div>

            <form onSubmit={handleSaveGithubConfig} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-500">GitHub Personal Access Token (Classic)</label>
                <input
                  type="password"
                  required
                  placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                  value={githubConfig.token}
                  onChange={(e) => setGithubConfig({ ...githubConfig, token: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <p className="text-[10px] font-mono text-neutral-500">
                  Generate at: <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">github.com/settings/tokens</a> (Scope: repo)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">GitHub Username / Owner</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. FahadSaleem"
                    value={githubConfig.owner}
                    onChange={(e) => setGithubConfig({ ...githubConfig, owner: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-neutral-500">Repository Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. fahad-portfolio"
                    value={githubConfig.repo}
                    onChange={(e) => setGithubConfig({ ...githubConfig, repo: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-neutral-500">Branch</label>
                <input
                  type="text"
                  placeholder="main"
                  value={githubConfig.branch}
                  onChange={(e) => setGithubConfig({ ...githubConfig, branch: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Save Config & Test Sync</span>
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
