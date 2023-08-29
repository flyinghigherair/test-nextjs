import React from 'react';

function ListLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="list">
      <h1>这是我的列表页</h1>
      {children}
    </div>
  );
}

export default ListLayout;
