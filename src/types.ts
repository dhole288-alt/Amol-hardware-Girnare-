export interface Product {
  id: string;
  name: string;
  marathiName: string;
  category: string;
  description: string;
  marathiDescription: string;
  features: string[];
  specs?: string;
  image: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  marathiName: string;
  description: string;
  marathiDescription: string;
  image: string;
  itemCount: string;
  iconName: string;
}

export interface EnquiryFormState {
  name: string;
  phone: string;
  productRequired: string;
  location: string;
  message: string;
}
