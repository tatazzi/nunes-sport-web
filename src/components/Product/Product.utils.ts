export interface ProductProps {
  code: string;
  productName: string;
  price: number;
  description: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
}
