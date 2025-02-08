import {TableTransaction, TableTransactionProps} from "../../../components/transaction";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "components/transaction/table",
    component: TableTransaction,
    tags: ["autodocs"],
} satisfies Meta<TableTransactionProps>

export default meta;

type Story = StoryObj<TableTransactionProps>;

export const Primary: Story = {

}