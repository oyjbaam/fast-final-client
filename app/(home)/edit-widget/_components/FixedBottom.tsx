import React from 'react';
import FlexBox from '@/components/ui/FlexBox';
import Button from '@/components/ui/Button';

const FixedBottom = () => {
  return (
    <FlexBox className='fixed bottom-0 w-full border-t border-gray-50 bg-white px-20 pb-32 pt-24 shadow-top-shadow xs:w-[520px]'>
      <Button aria-label='위젯 편집 완료' size='md'>
        완료
      </Button>
    </FlexBox>
  );
};
export default FixedBottom;