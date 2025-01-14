/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../utils/props';
import { useTheme } from '../utils/hooks/useTheme';
import '@itwin/itwinui-css/css/button.css';

export type ButtonGroupProps = {
  /**
   * Buttons in the ButtonGroup.
   */
  children: React.ReactNode;
} & StylingProps;

/**
 * Group buttons together for common actions
 * @example
 * <ButtonGroup>
 *   <IconButton>
 *     <SvgAdd />
 *   </IconButton>
 *   <IconButton>
 *     <SvgEdit />
 *   </IconButton>
 * </ButtonGroup>
 */
export const ButtonGroup = (props: ButtonGroupProps) => {
  const { children, className, ...rest } = props;

  useTheme();
  return (
    <div className={cx('iui-button-group', className)} {...rest}>
      {children}
    </div>
  );
};

export default ButtonGroup;
