import React from 'react';
import InputCard from '../InputCard';
import Input from '@/components/ui/Input';
import FlexBox from '@/components/ui/FlexBox';

export const StepOne = () => {
  return (
    <>
      <InputCard>
        <Input placeholder='버킷리스트를 작성해주세요' id='bucket-list' border='nonborder' />
      </InputCard>
      <InputCard>
        <Input
          placeholder='금액을 적어주세요'
          id='amount'
          border='nonborder'
          trailingText='원'
          type='text'
          inputMode='numeric'
        />
      </InputCard>
      <FlexBox alignItems='end' justifyContent='center' className='mt-32 h-[11.3rem] w-full'>
        <button type='button' className='rounded-full border border-active px-12 py-8 text-active'>
          이런 버킷리스트 어때요 {'>'}
        </button>
      </FlexBox>
    </>
  );
};
