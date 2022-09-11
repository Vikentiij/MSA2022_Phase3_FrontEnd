import React from "react";
import SearchBox from "../components/search-box";
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

export default {
  title: "MY COMPONENTS/SearchBox",
  component: SearchBox,
  argTypes: {
    onChange: { action: "Text changed" },
    onSearch: { action: "Search executed" },
  },
};

const Template = (args) => <SearchBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Text to search",
  buttonText: "Search",
};

export const Interactions = Template.bind({});
Interactions.args = {
  placeholder: "Text to search",
  buttonText: "Search",
};

Interactions.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByRole('textbox'), 'Example text');
  await waitFor(() => expect(args.onChange).toHaveBeenCalled());

  await userEvent.click(canvas.getByRole('button'));
  await waitFor(() => expect(args.onSearch).toHaveBeenCalled());
};