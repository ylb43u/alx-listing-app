// interfaces/index.ts

// Props for the Card component
export interface CardProps {
  title: string;
  description: string;
  image: string;
}

// Props for the Button component
export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}
