export interface ProductProps {
  id: string;
  productName: string;
  price: number;
  description: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
}
