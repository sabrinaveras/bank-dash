import {CreditCard, CreditCardProps} from "../../../components/creditCard";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
    title: "components/creditCard",
    component: CreditCard,
    tags: ["autodocs"],
} satisfies Meta<CreditCardProps>

export default meta;

type Story = StoryObj<CreditCardProps>;

export const Primary: Story = {
    args:{
        balance: "$5,756",
        cardHolder: "Eddy Cusuma",
        validThru: "12/12",
        
        creditCardType: "primary",
    }
}

export const Secondary: Story = {
    args:{
        balance: "$5,756",
        cardHolder: "Eddy Cusuma",
        validThru: "12/12",
        
        creditCardType: "secondary",
    }
}