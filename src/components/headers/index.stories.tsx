import { Meta, StoryFn } from "@storybook/react";
import HeaderBanner, { HeaderBannerProps } from ".";

export default {
  title: "Components/HeaderBanner",
  component: HeaderBanner,
} as Meta;

const Template: StoryFn<HeaderBannerProps> = (args: any) => (
  <HeaderBanner {...args} />
);

export const FullWidthImage = Template.bind({});
FullWidthImage.args = {
  type: "fullWidthImage",
  backgroundImage:
    "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/about-title-img1.jpg",
  title: "Full Width Image",
};

export const FullWidthNoImage = Template.bind({});
FullWidthNoImage.args = {
  type: "fullWidthNoImage",
  title: "Full Width No Image",
  subtitle: "This is a subtitle",
};

export const FullHeightImage = Template.bind({});
FullHeightImage.args = {
  type: "fullHeightImage",
  backgroundImage:
    "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/about-title-img1.jpg",
  title: "Full Height Image",
};

export const HalfWidthImage = Template.bind({});
HalfWidthImage.args = {
  type: "halfWidthImage",
  backgroundImage:
    "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/about-title-img1.jpg",
  title: "Half Width Image",
};
