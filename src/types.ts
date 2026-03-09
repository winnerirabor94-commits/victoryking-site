export type Role = 'student' | 'lecturer';

export interface User {
  id: string;
  name: string;
  role: Role;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  tags: string[];
}