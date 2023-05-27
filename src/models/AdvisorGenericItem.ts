export interface AdvisorGenericItem {
  name: string;
  imageUrl: string;
  location: string;
  openNow: string;
  rating: string;
  price: string;
  bearing: string;
  description: string;
  cuisine: {
    key: string;
    name: string;
  }[];
  phone: string;
  email: string;
  address: string;
}
