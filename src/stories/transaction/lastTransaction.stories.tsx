import {LastTransaction, LastTransactionProps} from "../../components/transaction";
import {Meta, StoryObj} from "@storybook/react";
import {CreditCardsIcon, RenewIcon, SettingsIcon, UserIcon, UserOutlineIcon} from "../../theme/icons";
import {theme} from "../../theme";

const meta = {
    title: "components/transaction/last",
    component: LastTransaction,
    tags: ["autodocs"],
} satisfies Meta<LastTransactionProps>

export default meta;

type Story = StoryObj<LastTransactionProps>;

export const Primary: Story = {
    args:{
        transactions:[
            {
                Icon: RenewIcon,
                iconColor: theme.palette.success.light,
                
                label: "Spotify Subscription",
                date: "25 Jan 2021",
                
                service: "Shopping",
                cardNumber: "124 ****",
                status: "Pending",
                
                amount: "-$150",
                amountColor: theme.palette.error.main,
            },
            {
                Icon: SettingsIcon,
                iconColor: theme.palette.info.light,
                
                label: "Mobile Service",
                date: "25 Jan 2021",
                
                service: "Service",
                cardNumber: "124 ****",
                status: "Completed",
                
                amount: "-$340",
                amountColor: theme.palette.error.main,
            },
            {
                Icon: UserOutlineIcon,
                iconColor: theme.palette.error.light,
                
                label: "Emilly Wilson",
                date: "25 Jan 2021",
                
                service: "Transfer",
                cardNumber: "124 ****",
                status: "Completed",
                
                amount: "+$780",
                amountColor: theme.palette.success.main,
            }
        ]
    }
}