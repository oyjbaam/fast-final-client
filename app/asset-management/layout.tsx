import React from 'react';
import { DefaultHeader } from '@/components/header';

const AssetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DefaultHeader title='자산' defaultColor='#f2f4f6' />
      <main className='bg-gray-50'>{children}</main>
    </>
  );
};
export default AssetLayout;
