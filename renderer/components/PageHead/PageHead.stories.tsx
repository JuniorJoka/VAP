import PageHead from '.';

export default {
  title: 'Components/PageHead',
  component: PageHead,
};

const Template = (args) => <PageHead {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Head',
};
