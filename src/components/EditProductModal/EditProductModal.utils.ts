export interface EditProductModalProps {
  isVisible: boolean;
  onClose: () => void;
  onFinishEdit: () => void;
  code?: string;
  initialName: string;
  initialDescription: string;
  initialPrice: number;
}
