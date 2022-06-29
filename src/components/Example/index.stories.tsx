import Example from './index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: `Components/Example`,
  component: Example,
} as ComponentMeta<typeof Example>;

export const HomePage: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);
