
export interface SuplimaxFormData {
  features: string;
  tone: string;
  audience: string;
  videoStyle: string;
}

export interface RealEstateFormData {
  tourStyle: string;
}

export interface PropertyDetails {
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  features: string;
}
export interface RealEstateFormProps {
  formData: RealEstateFormData;
  onFormChange: (newData: RealEstateFormData) => void;
  onSubmit: () => void;
  isLoading: boolean;
}export interface MediaDisplayProps {
  title: string;
  imageUrl?: string | null;
  videoScript?: string | null;
  isLoading: boolean;
  altText?: string;
  showPlaceholder?: boolean;
  placeholderText?: string;
  downloadFileName?: string;
}

