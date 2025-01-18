import { IAnswer } from './answer.model.ts';
import { ICategory } from './category.model.ts';

export interface IQuestion {
  id: number;
  question_category_id: number;
  user_id: number;
  text: string;
  lang: string;
  published: boolean;
  last_view?: string;
  today_views: number;
  total_views: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  keyword?: string;
  keyword_en?: string;
  meta_description?: string;
  meta_description_en?: string;
  player_id: string;
  answers: IAnswer[];
  category: ICategory;
}

export interface IQuestionDetails extends IQuestion {
  user: {
    id: number;
    first_name: string;
    last_name: string;
  };
}
