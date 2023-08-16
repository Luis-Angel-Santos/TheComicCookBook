export interface GroceryProducts {
  products:      Product[];
  totalProducts: number;
  type:          string;
  offset:        number;
  number:        number;
}

export interface Product {
  id:        number;
  title:     string;
  imageType?: string;
}
