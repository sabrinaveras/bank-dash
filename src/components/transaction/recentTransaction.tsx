import {Box, styled, SvgIconProps, Typography} from "@mui/material";
import {theme} from "../../theme";
import {FC} from "react";

interface Transaction{
    Icon: FC<SvgIconProps>;
    iconColor: string;
    
    label: string;
    date: string;
    
    amount: string;
    amountColor: string;
}

export interface RecentTransactionProps{
    transactions: Transaction[];
}

export const RecentTransaction = ({transactions}: RecentTransactionProps) => {
    
    return (
        <RecentTransactionWrapper>
            {
                transactions.map((transaction, index) => (
                    <TransactionCard key={index}>
                        <Box sx={{display: "flex", gap: theme.spacing(0.813)}}>
                            <IconBackground iconBackground={transaction.iconColor}>
                                <transaction.Icon/>
                            </IconBackground>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <Typography variant={"body1"}>{transaction.label}</Typography>
                                <Typography variant={"body2"} color={theme.palette.text.secondary}>{transaction.date}</Typography>
                            </Box>
                        </Box>
                        <Typography variant={"body1"} color={transaction.amountColor}>{transaction.amount}</Typography>
                    </TransactionCard>
                ))
            }
        </RecentTransactionWrapper>
    )
}

const TransactionCard = styled(Box)`
    display: flex;
    gap: ${(props) => props.theme.spacing(0.813)};
    align-items: center;
    justify-content: space-between;
`;

const IconBackground = styled(Box)<{iconBackground: string}>`
    background-color: ${(props) => props.iconBackground};
    border-radius: ${(props) => props.theme.spacing(3)};
    padding: ${(props) => props.theme.spacing(1.063)};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RecentTransactionWrapper = styled(Box)`
    width: 100%;
    background-color: ${(props) => props.theme.palette.common.white};
    border-radius: ${(props) => props.theme.spacing(1)};
    padding: ${(props) => props.theme.spacing(1.563)};
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing(0.625)}
`;