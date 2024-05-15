import { Logo } from '@/components/Common';
import { ILabeledValue, IStyle } from '@/types';
import { Link, history, styled } from '@umijs/max';
import { Swiper } from 'antd-mobile';
import { FC, Fragment, useState } from 'react';

type Item = { src: string; label: string };

interface CarouselProps extends IStyle {
  items: Item[];
}

export const Container = styled.div.attrs({
  className: 'w-full min-h-[100vh] bg-[#EFF3F9] pb-[5rem]',
})``;

export const ViewContainer = styled.section.attrs({
  className: 'w-full min-h-screen',
})``;

export const HeaderContainer = styled.section.attrs({
  className: 'w-full h-[23rem] p-6',
})`
  background: linear-gradient(178deg, #1e1043 1%, #311d69 25%, #44298e 98%);
`;

const ContactUs = styled.button.attrs({
  className:
    'btn btn-ghost h-5 min-h-5 bg-[#E0EAFF] text-black px-1.5 rounded text-[12px] absolute right-0 top-0',
  children: '联系我们',
})``;

const LogoWrapper = styled.div.attrs({
  className: 'w-full flex justify-center items-center text-white relative',
})``;

export const Header: FC = () => {
  return (
    <LogoWrapper>
      <Logo />
      <ContactUs onClick={() => history.push('/about')} />
    </LogoWrapper>
  );
};

const CarouselItemImage = styled.img.attrs({
  className:
    'object-cover h-[11.8rem] w-full border-4 border-[#ffc300] border-solid rounded-box',
})``;

const CarouselItemLabel = styled.div.attrs({
  className:
    'text-white absolute h-auto font-normal truncate px-2 py-1 font-[FZTYSJW--GB1-0]',
})`
  background: linear-gradient(180deg, rgba(216, 216, 216, 0) 0%, #1c1b1b 100%);
  width: calc(100% - 7px);
  left: 4px;
  bottom: 4px;
  border-bottom-left-radius: var(--rounded-box);
  border-bottom-right-radius: var(--rounded-box);
`;

const CarouselItem = (item: Item) => {
  return (
    <div className="rounded-box overflow-hidden">
      <CarouselItemImage src={item.src} />
      <CarouselItemLabel>{item.label}</CarouselItemLabel>
    </div>
  );
};

const CarouselIndicator = styled.li.attrs<{ active: boolean | number }>({
  className:
    'w-1.5 h-1.5 rounded-full bg-white mx-[2px] transition duration-300 ease-in-out',
})`
  background-color: ${(props) => props.active && `#ffc300`};
`;

const IndicatorWrapper = styled.ul.attrs({
  className: 'flex justify-center items-center w-full mt-2',
})``;

export const Carousel: FC<CarouselProps> = (props) => {
  const { items, className, style } = props;
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Swiper
        className={className}
        style={style}
        indicator={() => null}
        onIndexChange={(index) => setIndex(index)}
        autoplay
        loop
      >
        {items.map((i, index) => (
          <Swiper.Item key={index}>
            <CarouselItem {...i} />
          </Swiper.Item>
        ))}
      </Swiper>
      <IndicatorWrapper>
        {items.map((_, idx) => (
          <CarouselIndicator active={idx === index ? 1 : 0} key={idx} />
        ))}
      </IndicatorWrapper>
    </div>
  );
};

const StatisticWrapper = styled.div.attrs({
  className: 'flex rounded-[10px] bg-white w-full p-2 mt-2 shadow-xl',
})``;

const StatisticItem = styled.div.attrs({
  className: 'flex-1 flex items-center justify-center',
})``;

const StatisticTitle = styled.div.attrs({
  className: 'text-[12px] whitespace-pre',
})``;

const StatisticNumber = styled.div.attrs({
  className: 'text-[16px] font-bold pl-4',
})``;

export const Statistic: FC<{ items: ILabeledValue<number>[] }> = ({
  items,
}) => {
  return (
    <StatisticWrapper>
      {items.map((item, index) => (
        <Fragment key={index}>
          <StatisticItem>
            <StatisticTitle>{item.label}</StatisticTitle>
            <StatisticNumber>{item.value}</StatisticNumber>
          </StatisticItem>
          {index !== items.length - 1 && (
            <div className="divider divider-horizontal divider-start" />
          )}
        </Fragment>
      ))}
    </StatisticWrapper>
  );
};

export const FooterContainer = styled.section.attrs({
  className: 'p-4 bg-white rounded-[10px] shadow-xl mt-4',
})``;

const MenuWrapper = styled.div.attrs({
  className: 'w-full grid grid-cols-2 gap-3',
})``;

const MenuItem = styled.div.attrs({
  className: 'text-black text-[14px] font-bold shadow-xl rounded-box',
})``;

interface MenuProps extends IStyle {
  items: { path: string; image: string; label: string }[];
}
export const Menu: FC<MenuProps> = ({ items }) => {
  return (
    <MenuWrapper>
      {items.map((item, index) => (
        <MenuItem key={index}>
          <Link to={item.path}>
            <img src={item.image} alt={item.label} />
          </Link>
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

export const FooterLogo = styled.img.attrs<{ src: string }>({
  className: 'w-full mt-2',
})``;
