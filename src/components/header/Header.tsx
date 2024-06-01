import { HeaderTitle, HeaderWrapper } from "./Header.styles";


export const Header = ({ title }: { title: string }) => {
 
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderWrapper>
  );
};
