export interface CustomInputProps {
  title: string;
  placeholder: string;
  onChange: (e: any) => void;
  height?: number;
  value?: string | number;
  type?: string;
  error?: string;
}
