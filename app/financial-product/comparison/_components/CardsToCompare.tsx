import Icon from '@/components/Icon';
import FlexBox from '@/components/ui/FlexBox';
import Text from '@/components/ui/Text';
import { Card } from '@/components/ui/card';
import { CardResponseType } from '@/shared/types/response/card';
import { CARD_BENEFIT_CATEGORIES } from '@/shared/utils/financial-product/staticData';
import Image from 'next/image';

type CardsToCompareProps = {
  isSelected: boolean;
  onSelect: (cardId: string) => void;
  card: CardResponseType;
};

const CardsToCompare = ({ isSelected, onSelect, card }: CardsToCompareProps) => {
  return (
    <Card
      className={`p-24 ${isSelected && 'relative ring-1 ring-primary'}`}
      onClick={() => onSelect(card.id)}
    >
      <FlexBox>
        <Image
          src={card.card_image}
          alt={`${card.name} 카드 이미지`}
          width={100}
          height={70}
          className='mr-16 w-[4.4rem]'
        />
        <FlexBox flexDirection='col'>
          <Text sizes='16' weight='600' className='mb-[0.2rem]'>
            {card.name}
          </Text>
          <Text className='mb-[1rem]'>{card.description}</Text>
          <ul className='hide-scrollbar flex gap-20 overflow-x-scroll'>
            {card.benefits.map(({ category }) => {
              const categoryInfo = CARD_BENEFIT_CATEGORIES.find((c) => c.title_en === category);

              return (
                <li key={category} className=' flex items-center gap-[0.2rem] '>
                  <Icon
                    src={categoryInfo?.iconPath || ''}
                    alt={`${categoryInfo?.title_kr} icon`}
                    size='12'
                    className='shrink-0'
                  />
                  <Text sizes='12' className='shrink-0 text-gray-600'>
                    {categoryInfo?.title_kr}
                  </Text>
                </li>
              );
            })}
          </ul>
        </FlexBox>
      </FlexBox>
      {isSelected && (
        <Icon
          src='/icons/system-icon/checkbox/round-checkbox-on.svg'
          alt='check icon'
          size='24'
          className='absolute right-[2.4rem] top-1/2 w-[2.4rem] translate-y-[-50%]'
        />
      )}
    </Card>
  );
};

export default CardsToCompare;
