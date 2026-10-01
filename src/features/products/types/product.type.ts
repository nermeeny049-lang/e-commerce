// Metadata and Pagination Interfaces
export interface PaginationMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
}

// Product Interface
export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount?: number;
  sold: number;
  images: string[];
  imageCover: string;
  category: Category;
  subcategory: Subcategory[];
  brand: Brand;
  ratingsQuantity: number;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
}

// Top-Level Response Interface
export interface ProductsAPIResponse {
  results: number;
  metadata: PaginationMetadata;
  data: Product[];
}

// Base/Shared Entities
export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface User {
  _id: string;
  name: string;
}

export interface Review {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Core Product Entity
export interface PProduct {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images: string[];
  ratingsQuantity: number;
  ratingsAverage: number;
  category: Category;
  subcategory: Subcategory[];
  brand: Brand;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// API Response Container
export interface ProductDetailsResponse {
  data: PProduct;
}
