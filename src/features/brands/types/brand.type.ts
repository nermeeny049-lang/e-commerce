import { PaginationMetadata } from "<prefix>/features/products/types/product.type";

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface BrandsApiResponse {
  results: number;
  metadata: PaginationMetadata;
  data: Brand[];
}

export interface BrandResponse {
  data: Brand;
}
