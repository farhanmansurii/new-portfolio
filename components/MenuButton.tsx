import React from 'react';

export const MenuButton = ({ children, className }: { children: any, className: string }) => {
  return (
    <div className={`font-neue group relative cursor-pointer overflow-hidden  ${className}`}>
      <span className="inline-block transition duration-500 ease-out group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute left-0 inline-block translate-y-[120%] rotate-12  transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};
