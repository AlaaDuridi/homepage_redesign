export interface IAuthor {
    id: number;
    user_id?: number;
    drupal_id: string;
    name: string;
    name_en: string;
    title: string;
    title_en: string;
    biography: string;
    biography_en: string;
    role: string;
    publish: boolean;
    photo: string;
    photo_en: string;
    facebook?: string;
    youtube?: string;
    website?: string;
    instagram?: string;
    is_ar: boolean;
    is_en: boolean;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    photo_old:string;
    photo_old_en:string;
}