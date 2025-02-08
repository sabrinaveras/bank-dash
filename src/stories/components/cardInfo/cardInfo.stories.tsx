import {CardInfo, CardInfoProps} from "../../../components/cardInfo";
import {Meta, StoryObj} from "@storybook/react";
import {MoneyBagIcon} from "../../../theme/icons";
import {theme} from "../../../theme";

const meta = {
    title: "components/card info",
    component: CardInfo,
    tags: ["autodocs"],
} satisfies Meta<CardInfoProps>

export default meta;

type Story = StoryObj<CardInfoProps>;

export const Primary: Story = {
    args:{
        label: "Total Invested Amount",
        value: "$150,000",
        
        backgroundColor: theme.palette.success.light,
        Icon: MoneyBagIcon,
    }
}