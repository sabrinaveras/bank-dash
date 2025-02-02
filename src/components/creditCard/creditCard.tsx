import {Box, styled, Typography} from "@mui/material";
import {theme} from "../../theme";
import {ChipIcon, MastercardIcon} from "../../theme/icons";

type CreditCardType = "primary" | "secondary";

export interface CreditCardProps{
    balance: string;
    cardHolder: string;
    validThru: string;
    
    creditCardType: CreditCardType;
}

export const CreditCard =({balance, cardHolder, validThru, creditCardType}: CreditCardProps) => {
    
    return <CreditCardWrapper creditCardType={creditCardType}>
        <CreditCardBody>
            <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <ColumnInfo label={"Balance"} value={balance} creditCardType={creditCardType} />
                <ChipIcon/>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <ColumnInfo label={"CARD HOLDER"} value={cardHolder} creditCardType={creditCardType}/>
                <ColumnInfo label={"VALID THRU"} value={validThru} creditCardType={creditCardType}/>
            </Box>
        </CreditCardBody>
        <CreditCardFooter>
            <Typography variant={"h2"} color={creditCardType === "primary" ? theme.palette.common.white: theme.palette.secondary.main}>3778 **** **** 1234</Typography>
            <MastercardIcon fill={creditCardType === "primary" ? theme.palette.common.white : theme.palette.grey[100]}/>
        </CreditCardFooter>
    </CreditCardWrapper>
}

const ColumnInfo = ({label, value, creditCardType}: {label: string, value: string, creditCardType: CreditCardType}) => {
    
    return <Box sx={{display: "flex", flexDirection: "column", gap: theme.spacing(0.181)}}>
        <Typography variant={"caption"} color={creditCardType === "primary" ? theme.palette.common.white : theme.palette.text.secondary}>{label}</Typography>
        <Typography variant={"body2"} color={creditCardType === "primary" ? theme.palette.common.white: theme.palette.secondary.main}>{value}</Typography>
    </Box>
}

const CreditCardBody = styled(Box)`
    height: ${(props) => props.theme.spacing(6.688)};
    padding: ${(props) => props.theme.spacing(1.5, 1.625)};
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing(1.813)};
`;

const CreditCardFooter = styled(Box)`
    display: flex;
    height: ${(props) => props.theme.spacing(4.375)};
    border-top: ${(props) => `${props.theme.spacing(0.063)} solid ${props.theme.palette.background.default}`};
    align-items: center;
    padding: ${(props) => props.theme.spacing(0, 1.625)};
    justify-content: space-between;
`;

const CreditCardWrapper = styled(Box)<{creditCardType: CreditCardType }>`
    background: ${(props) => props.creditCardType === "primary" ? "linear-gradient(180deg, #4C49ED 0%, #0A06F4 100%)" : props.theme.palette.common.white};
    width: ${(props) => props.theme.spacing(21.875)};
    height: ${(props) => props.theme.spacing(14.063)};
    border-radius: ${(props) => props.theme.spacing(1.563)};
    border: ${(props) => `${props.theme.spacing(0.063)} solid ${props.theme.palette.background.default}`};
`;