import {RecentTransaction, RecentTransactionProps} from "../../components/transaction";
import {Meta, StoryObj} from "@storybook/react";
import {CreditCardIcon, CreditCardsIcon, DollarSignIcon, PaypalIcon} from "../../theme/icons";
import {theme} from "../../theme";

const meta = {
    title: "components/transaction",
    component: RecentTransaction,
    tags: ["autodocs"],
} satisfies Meta<RecentTransactionProps>

export default meta;

type Story = StoryObj<RecentTransactionProps>;

export const Primary: Story = {
    args:{
        transactions: [
            {
                Icon: CreditCardsIcon,
                iconColor: theme.palette.warning.light,
                
                label: "Deposit from my Card",
                date: "28 January 2021",
                
                amount: "-$850",
                amountColor: theme.palette.error.main,
            },
            {
                Icon: PaypalIcon,
                iconColor: theme.palette.info.light,
                
                label: "Deposit Paypal",
                date: "25 January 2021",
                
                amount: "+$2,500",
                amountColor: theme.palette.success.main,
            },
            {
                Icon: DollarSignIcon,
                iconColor: theme.palette.success.light,
                
                label: "Jemi Wilson",
                date: "21 January 2021",
                
                amount: "+$5,400",
                amountColor: theme.palette.success.main,
            }
        ]
    }
}