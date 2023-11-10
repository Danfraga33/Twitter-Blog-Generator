import React from "react";
import TextInput from "./TextInput";

export default {
  title: "TextInput",
  component: TextInput,
};

const Template = (args) => <input {...args} />;

export const Red = Template.bind({});
Red.args = {
  placeholder: "red",
};
