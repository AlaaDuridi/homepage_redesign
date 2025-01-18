export interface ICategory {
  id: number;
  name: string;
  name_en: string;
  photo: string;
  photo_en: string;
  description: string;
  description_en: string;
  sort: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}
