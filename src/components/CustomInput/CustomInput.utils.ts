export interface CustomInputProps {
  title: string;
  placeholder: string;
  onChange: (e: any) => void;
  value?: string | number;
  type?: string;
}
