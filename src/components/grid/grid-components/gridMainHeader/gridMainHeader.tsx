import { Heading1 } from "@/components/ui/typography/headings";
import "./css/gridMainHeader.css";
export const GridMainHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string | JSX.Element;
}) => {
  return (
    <header className="grid-container__header grid-main-header">
      <Heading1 position="left" className="grid-main-header__title">
        {title}
      </Heading1>

      <h2 className="grid-main-header__subtitle">{subtitle}</h2>
    </header>
  );
};
