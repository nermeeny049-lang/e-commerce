export interface ProductsResponse {
  status: string;
  count: number;
  data: Product[];
  message?: string;
}

export interface ProductsResponseError {
  status: string;
  message: string;
  data: null;
  count: 0;
}
export interface RemoveFromWishlistResponse {
  status: string;
  message: string;
  data: string[];
}
export interface Product {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
