import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
  return <h1>{props.title}</h1>;
};

export default PageTitle;