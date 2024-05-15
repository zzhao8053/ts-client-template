import { useUpdateEffect } from 'ahooks';
import { FC, useMemo, useState } from 'react';
import { styled } from 'styled-components';

type TabBarItemProps = {
  name: string;
  label: string;
  icon: string;
  selectedIcon: string;
  path: string;
  onClick?: (key: string) => void;
};

type TabBarProps = {
  items: TabBarItemProps[];
  defaultActive: string;
  onChange?: (key: string) => void;
};

const Wrapper = styled.div.attrs({
  className: 'layout-wrapper',
})`
  height: 100%;
`;

const TabBarWrapper = styled.div.attrs({
  className: 'btm-nav rounded-t-[30px]',
})``;

const TabBarIcon = styled.img.attrs({
  width: 30,
  height: 30,
  className: `w-[30px] h-[30px]`,
})`
  filter: drop-shadow(0 0 0.75rem rgba(51, 154, 240, 0.3));
`;

const TabBarLabel = styled.div.attrs({
  className: 'w-[60px] text-[12px] text-gray-500 mt-2',
})``;

const TabBarItem: FC<TabBarItemProps & { active: boolean }> = ({
  active,
  icon,
  label,
  selectedIcon,
  onClick,
  name,
}) => {
  const iconSrc = useMemo(() => {
    if (active) {
      return selectedIcon;
    }
    return icon;
  }, [active]);

  return (
    <div className="flex-1 justify-center items-center">
      <button
        type="button"
        className="btn btn-circle btn-ghost"
        onClick={() => onClick?.(name)}
      >
        <div className="flex flex-col items-center">
          <TabBarIcon src={iconSrc} />
          <TabBarLabel>{label}</TabBarLabel>
        </div>
      </button>
    </div>
  );
};

export const TabBar: FC<TabBarProps> = ({ items, onChange, defaultActive }) => {
  const [activePath, setActivePath] = useState<string>(defaultActive);

  useUpdateEffect(() => {
    if (onChange) {
      onChange(activePath);
    }
  }, [activePath]);

  return (
    <Wrapper>
      <TabBarWrapper>
        {items.map((item) => (
          <TabBarItem
            {...item}
            key={item.name}
            onClick={() => setActivePath(item.path)}
            active={activePath === item.path}
          />
        ))}
      </TabBarWrapper>
    </Wrapper>
  );
};
