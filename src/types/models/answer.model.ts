import { IAuthor } from './author.model.ts';

export interface IAnswer {
  id: number;
  question_id: number;
  author_id: number;
  text: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  keyword?: string;
  keyword_en?: string;
  meta_description?: string;
  meta_description_en?: string;
  author: IAuthor;
}
