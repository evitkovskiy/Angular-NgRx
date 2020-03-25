export interface IId {
    $oid: string
}

export interface IProduct {
      _id: IId,
      title: string,
      price: number,
      size: string[],
      images: string[],
      rating: number,
      description: string,
      tags: string[],
      color: string[]
}

export interface IProductState {
    products: IProduct[],
    selectedProduct: IProduct
}

export const initialProductState: IProductState = {
    products: null,
    selectedProduct: null
}

