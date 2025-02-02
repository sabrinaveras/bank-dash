import {Sidebar, SidebarProps} from "../../../components/sidebar";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "components/sidebar",
    component: Sidebar,
    tags: ["autodocs"],
} satisfies Meta<SidebarProps>

export default meta;

type Story = StoryObj<SidebarProps>;

export const Primary: Story = {
    args:{
        children: <>Sidebar</>
    },
};