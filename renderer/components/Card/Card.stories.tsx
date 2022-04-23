import Card from '.';

export default {
  title: 'Component/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  primaryText: 'Header Text',
  secondaryText: 'sub-text',
};

export const LongText = Template.bind({});
LongText.args = {
  primaryText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, fuga.',
  secondaryText: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
};

export const SelectionMode = Template.bind({});
SelectionMode.args = {
  primaryText: 'Header Text',
  secondaryText: 'sub-text',
  selectionMode: true,
};

export const Selected = Template.bind({});
Selected.args = {
  primaryText: 'Header Text',
  secondaryText: 'sub-text',
  selectionMode: true,
  selected: true,
};
