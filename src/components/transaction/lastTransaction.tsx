import {Box, styled, SvgIconProps, Typography} from "@mui/material";
import {FC} from "react";
import {theme} from "../../theme";

interface Transaction{
    Icon: FC<SvgIconProps>
    iconColor: string,
    
    label: string;
    date: string;
    
    service: string;
    cardNumber: string;
    status: "Pending" | "Completed",
    
    amount: string,
    amountColor: string,
}

export interface LastTransactionProps{
    transactions: Transaction[];
}

export const LastTransaction = ({transactions}: LastTransactionProps) => {
    
    return (
        <LastTransactionWrapper>
            {
                transactions.map((transaction, index) => (
                    <LastTransactionCard key={index}>
                        <Box sx={{display: "flex", width: theme.spacing(12.75), gap: theme.spacing(0.813), alignItems: "center"}}>
                            <IconBackground iconBackground={transaction.iconColor}>
                                <transaction.Icon/>
                            </IconBackground>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <Typography variant={"body1"}>{transaction.label}</Typography>
                                <Typography variant={"body2"} color={theme.palette.text.secondary}>{transaction.date}</Typography>
                            </Box>
                        </Box>
                        <Typography variant={"body1"} color={theme.palette.text.secondary} sx={{width: theme.spacing(3.875)}}>{transaction.service}</Typography>
                        <Typography variant={"body1"} color={theme.palette.text.secondary}>{transaction.cardNumber}</Typography>
                        <Typography variant={"body1"} color={theme.palette.text.secondary} sx={{width: theme.spacing(4.375)}}>{transaction.status}</Typography>
                        <Typography variant={"body1"} color={transaction.amountColor}>{transaction.amount}</Typography>
                    </LastTransactionCard>
                ))
            }
        </LastTransactionWrapper>
    )
}

const LastTransactionCard = styled(Box)`
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
    width: ${(props) => props.theme.spacing(1.313)};
    height: ${(props) => props.theme.spacing(1.313)};
`;

const LastTransactionWrapper = styled(Box)`
    width: 100%;
    background-color: ${(props) => props.theme.palette.common.white};
    border-radius: ${(props) => props.theme.spacing(1)};
    padding: ${(props) => props.theme.spacing(1.563)};
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing(0.625)}
`;