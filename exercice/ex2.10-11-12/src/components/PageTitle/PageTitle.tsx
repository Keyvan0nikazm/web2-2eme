import React from 'react';
interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = (props : PageTitleProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default PageTitle;