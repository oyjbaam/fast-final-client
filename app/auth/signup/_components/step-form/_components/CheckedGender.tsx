import FlexBox from '@/components/ui/FlexBox';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import Text from '@/components/ui/Text';

type CheckedGenderProps = {
  register: UseFormRegister<FieldValues>;
};

const genderChoiceBtnClass =
  'flex h-[4.8rem] w-full cursor-pointer items-center justify-center rounded-sm bg-gray-200 text-center text-gray-400 transition duration-200 hover:bg-gray-400';

const CheckedGender = () => {
  return (
    <div className='w-full'>
      <Text sizes='18' weight='700' className='mt-24'>
        성별을 선택해주세요.
      </Text>

      <FlexBox justifyContent='center' className='mt-16 w-full gap-x-4'>
        <input
          // {...register('gender', { required: true })}
          type='radio'
          className='peer/male hidden'
          id='male'
          name='gender'
          value='male'
        />
        <label
          htmlFor='male'
          className={`${genderChoiceBtnClass} peer-checked/male:bg-primary peer-checked/male:text-white`}
        >
          <Text sizes='16'>남성</Text>
        </label>
        <input
          // {...register('gender', { required: true })}
          type='radio'
          id='female'
          name='gender'
          value='female'
          className='peer/female hidden'
        />
        <label
          htmlFor='female'
          className={`${genderChoiceBtnClass} peer-checked/female:bg-primary peer-checked/female:text-white`}
        >
          <Text sizes='16'>여성</Text>
        </label>
      </FlexBox>
    </div>
  );
};

export default CheckedGender;
