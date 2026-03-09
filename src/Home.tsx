import { useAppContext } from './AppContext';
import { Clock, User as UserIcon } from 'lucide-react';

export function Home() {
  const { posts } = useAppContext();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">School Blog Feed</h1>
        <p className="text-lg text-gray-500">Stay updated with the latest from your lecturers and school administration.</p>
      </div>

      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900 hover:text-indigo-600 cursor-pointer">{post.title}</h2>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">{post.content}</p>
            
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <UserIcon className="h-4 w-4" />
                <span className="font-medium text-gray-700">{post.authorName}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No posts available right now.
          </div>
        )}
      </div>
    </div>
  );
}