import React from "react";
import { Title } from "../components/title";
import logo from "./assets/logo.png";

export default {
  title: "MY COMPONENTS/Title",
  component: Title,
};

const Template = (args) => (
  <Title {...args}>
    {args.logoEnabled && <img src={logo} height={128} width={128} alt="Logo" />}
  </Title>
);

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  subtitle: "Subtitle",
  logoEnabled: true,
};
