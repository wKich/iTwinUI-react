/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Tag, TagContainer, TagProps } from '../../src/core';

export default {
  component: Tag,
  title: 'Core/Tag',
  argTypes: {
    style: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} as Meta<TagProps>;

export const Default: Story<TagProps> = ({ children, onRemove, ...rest }) => {
  return (
    <Tag onRemove={onRemove} {...rest}>
      {children}
    </Tag>
  );
};

Default.args = {
  children: "I'm a tag",
};

Default.argTypes = {
  onRemove: { action: 'Closed me!' },
};

export const NoClose: Story<TagProps> = ({ children, ...rest }) => {
  return <Tag {...rest}>{children}</Tag>;
};

NoClose.args = {
  children: 'Cannot close me!',
};

NoClose.argTypes = {
  onRemove: { table: { disable: true } },
};

export const BasicTagsContainer: Story = ({ variant, ...rest }) => {
  return (
    <TagContainer {...rest}>
      <Tag variant={variant}>Tag 1</Tag>
      <Tag variant={variant}>Tag 2</Tag>
      <Tag variant={variant}>Tag 3</Tag>
    </TagContainer>
  );
};

BasicTagsContainer.argTypes = {
  children: { table: { disable: true } },
  onRemove: { table: { disable: true } },
};

BasicTagsContainer.args = {
  variant: 'basic',
};
