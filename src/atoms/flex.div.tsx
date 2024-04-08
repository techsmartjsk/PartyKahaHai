import React, { ReactNode } from 'react';

interface FlexDivProps {
  children: ReactNode;
}

const FlexDiv: React.FC<FlexDivProps> = ({ children }) => {
  return <div className='flex'>{children}</div>;
};

export default FlexDiv;
