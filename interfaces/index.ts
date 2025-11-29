export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  description: string; 
  discount: string;
   reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];    
}
