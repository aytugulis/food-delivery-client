export interface Food {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface ExtentedFood extends Food {
  cookedStatus: string;
}

export interface CartItem extends ExtentedFood {
  count: number;
}
