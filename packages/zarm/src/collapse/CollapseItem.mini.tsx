import React, { HTMLAttributes, useMemo } from 'react';
import { createBEM } from '@zarm-design/bem';
import Taro from '@tarojs/taro';
import type { BaseCollapseItemProps } from './interface';
import { ConfigContext } from '../config-provider';
import { useSafeLayoutEffect } from '../utils/hooks';
import { nanoid } from '../utils';

const getRect = (id): Promise<Taro.NodesRef.BoundingClientRectCallbackResult> => {
  return new Promise((resolve) => {
    Taro.createSelectorQuery().select(`#${id}`).boundingClientRect((rect) => {
      resolve(rect);
    }).exec();
  });
}

export type CollapseItemProps = Omit<HTMLAttributes<HTMLDivElement>, 'key' | 'title' | 'onChange'> &
  BaseCollapseItemProps;

const CollapseItem = React.forwardRef<unknown, CollapseItemProps>((props, ref) => {
  const { title, className, disabled, animated, isActive, children, onChange, ...rest } = props;

  const content = (ref as any) || React.createRef<HTMLElement>();
  const collapseItemRef = (ref as any) || React.createRef<HTMLElement>();
  const { prefixCls } = React.useContext(ConfigContext);
  const bem = createBEM('collapse-item', { prefixCls });

  const id = useMemo(() => `collapse-item-${nanoid()}`, []);

  const onClickItem = () => {
    if (disabled) return;
    onChange?.(isActive!);
  };


  const setStyle = React.useCallback(async () => {
    if (!content.current) return;
    const rect = await getRect(id);
    content.current.style.height = isActive ? `${rect.height}px` : '0px';
  }, [content, isActive]);

  const cls = bem([
    {
      active: isActive,
      disabled,
    },
    className,
  ]);

  useSafeLayoutEffect(() => {
    setStyle();
  }, [setStyle]);

  return (
    <div className={cls} {...rest} ref={collapseItemRef}>
      <div className={bem('header')} onClick={onClickItem}>
        <div className={bem('title')}>{title}</div>
        <div className={bem('arrow')} />
      </div>
      <div className={bem('content')} ref={content}>
        <div className={bem('content__inner')} id={id}>{children}</div>
      </div>
    </div>
  );
});

CollapseItem.displayName = 'CollapseItem';

CollapseItem.defaultProps = {
  animated: false,
  disabled: false,
};

export default CollapseItem;
