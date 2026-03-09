import { createContext, useContext, useState, ReactNode } from 'react';
import { User, Post } from './types';

const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Dr. Smith', role: 'lecturer', avatar: 'https://i.pravatar.cc/150?u=u1' },
  { id: 'u2', name: 'Prof. Johnson', role: 'lecturer', avatar: 'https://i.pravatar.cc/150?u=u2' },
  { id: 'u3', name: 'Alice Student', role: 'student', avatar: 'https://i.pravatar.cc/150?u=u3' },
  { id: 'u4', name: 'Bob Learner', role: 'student', avatar: 'https://i.pravatar.cc/150?u=u4' },
];

const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    title: 'Welcome to the School Portal',
    content: 'We are excited to launch the new blogging platform for our school. Lecturers can post updates and students can read them here.',
    authorId: 'u1',
    authorName: 'Dr. Smith',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    tags: ['Announcement', 'General'],
  },
  {
    id: 'p2',
    title: "Physics 101: Newton's Laws",
    content: 'Today we discussed the three laws of motion. Please review the material on the syllabus before our next lab.',
    authorId: 'u2',
    authorName: 'Prof. Johnson',
    createdAt: new Date().toISOString(),
    tags: ['Physics', 'Lecture'],
  }
];

interface AppContextType {
  user: User | null;
  login: (userId: string) => void;
  logout: () => void;
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'createdAt' | 'authorId' | 'authorName'>) => void;
  deletePost: (id: string) => void;
  users: User[];
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);

  const login = (userId: string) => {
    const found = MOCK_USERS.find(u => u.id === userId);
    if (found) setUser(found);
  };

  const logout = () => setUser(null);

  const addPost = (post: Omit<Post, 'id' | 'createdAt' | 'authorId' | 'authorName'>) => {
    if (!user || user.role !== 'lecturer') return;
    
    const newPost: Post = {
      ...post,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date().toISOString(),
      authorId: user.id,
      authorName: user.name,
    };
    
    setPosts([newPost, ...posts]);
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <AppContext.Provider value={{ user, login, logout, posts, addPost, deletePost, users: MOCK_USERS }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};