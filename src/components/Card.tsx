import React, { useState } from 'react';
import Button from './Button';
import { CardProps } from '../lib/definitions';

interface Props {
    cardData: CardProps[];
}

const Card: React.FC<Props> = ({ cardData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <>
      {cardData.map((item, index) => (
        <div className='card' key={index}>
          {item.imageUrl && (
            <div
              className={`__image ${activeIndex === index ? '' : 'active'}`}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.isTransitionPanel && (
                <div className={`__transition-panel ${activeIndex === index ? 'active' : ''}`}>
                  <p>{item.transitionPanelContent}</p>
                </div>
              )}
            </div>
          )}
          <div className='__content'>
            <div className='__headings'>
              {item.subTitle && <h4>{item.subTitle}</h4>}
              {item.title && (
                <h2 style={item.textColor ? { color: item.textColor } : {}}>{item.title}</h2>
              )}
            </div>
            <div className='__description'>
              <p>{item.description}</p>
            </div>
            {item.isButton && (item.icon || item.buttonText) && (
              <Button
                buttonColor={item.buttonColor}
                onClick={() => console.log('Button clicked')}
                icon={item.icon}
              >
                {item.buttonText}
              </Button>
            )}
            {!item.isButton && (
              <>{item.buttonText}</>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;