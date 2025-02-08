import {Button, ButtonProps} from "../../components/button";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "components/button",
    component: Button,
    tags: ["autodocs"],
} satisfies Meta<ButtonProps>

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
    args:{
        label: "label"
    }
}

