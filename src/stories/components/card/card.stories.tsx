import {Card, CardProps} from "../../../components/card";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
    title: "components/card",
    component: Card,
    tags: ["autodocs"],
} satisfies Meta<CardProps>

export default meta;

type Story = StoryObj<CardProps>;

export const Primary: Story = {
    args:{
        balance: "$5,756",
        cardHolder: "Eddy Cusuma",
        validThru: "12/12",
        
        cardType: "primary",
    }
}

export const Secondary: Story = {
    args:{
        balance: "$5,756",
        cardHolder: "Eddy Cusuma",
        validThru: "12/12",
        
        cardType: "secondary",
    }
}