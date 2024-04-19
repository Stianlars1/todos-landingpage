// BaseCardProps now includes common properties and excludes variant-specific attributes
type BaseCardProps = {
  title: string;
  description?: string;
};

// DefaultCardProps extends React.HTMLAttributes<HTMLDivElement> to include div properties
type DefaultCardProps = BaseCardProps &
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default";
  };

// LinkCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> to include anchor properties
type LinkCardProps = BaseCardProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant: "link";
    href: string; // Explicitly include href here for clarity and type enforcement
    icon?: JSX.Element; // Optional icon
  };

type CardProps = DefaultCardProps | LinkCardProps;
