import { metadata } from "./../../../app/layout";
export interface PagenationMetadata {
  currentPage: number;
  numberOfPage: number;
  limit: number;
  nextPage?: number;
  prevPage?: number;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoriesApiResponse {
  results: number;
  metadata: PagenationMetadata;
  data: Category[];
}

export interface CategoryResponse {
  data: Category;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
