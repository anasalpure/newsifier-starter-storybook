// this should be maintaind on an npm registery
export interface IButtonViewProps {
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "error" | "disabled" | "custom";
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e?: any) => void;
  children: React.ReactNode;
  padding?: string;
  colors?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface IReviewViewProps {
  rate: number;
  topRate?: number;
}
