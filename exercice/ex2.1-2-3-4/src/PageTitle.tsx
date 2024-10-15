import React from 'react';
interface PageTitleProps {
    title: String;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;