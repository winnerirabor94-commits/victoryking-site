import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { PlusCircle, Trash2, Send } from 'lucide-react';

export function Dashboard() {
  const { user, posts, addPost, deletePost } = useAppContext();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    addPost({
      title,
      content,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
    });

    setTitle('');
    setContent('');
    setTags('');
  };

  const myPosts = posts.filter(p => p.authorId === user.id);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
        <img src={user.avatar} alt={user.name} className="h-24 w-24 rounded-full border-4 border-white shadow-md" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-lg text-gray-500 capitalize mt-1">{user.role} Account</p>
        </div>
      </div>

      {user.role === 'lecturer' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <PlusCircle className="h-5 w-5 text-indigo-600" /> Create New Post
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                placeholder="Post title..."
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                id="content"
                value={content}
                onChange={e => setContent(e.target.value)}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow resize-y"
                placeholder="Write your post content here..."
                required
              />
            </div>
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
              <input
                id="tags"
                type="text"
                value={tags}
                onChange={e => setTags(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                placeholder="e.g. Physics, Announcement, Homework"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                <Send className="h-4 w-4" /> Publish Post
              </button>
            </div>
          </form>
        </div>
      )}

      {user.role === 'lecturer' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Previous Posts</h2>
          {myPosts.length > 0 ? (
            <div className="space-y-4">
              {myPosts.map(post => (
                <div key={post.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.title}</h3>
                    <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
                  </div>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete post"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">You haven't created any posts yet.</p>
          )}
        </div>
      )}

      {user.role === 'student' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Student Info</h2>
          <p className="text-gray-600">
            Welcome to your student dashboard. Head over to the Feed to see the latest updates from your lecturers.
          </p>
        </div>
      )}
    </div>
  );
}