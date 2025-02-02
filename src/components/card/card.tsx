import {Box, styled, Typography} from "@mui/material";
import {theme} from "../../theme";
import {ChipIcon, MastercardIcon} from "../../theme/icons";

type CardType = "primary" | "secondary";

export interface CardProps{
    balance: string;
    cardHolder: string;
    validThru: string;
    
    cardType: CardType;
}

export const Card =({balance, cardHolder, validThru, cardType}: CardProps) => {
    
    return <CardWrapper cardType={cardType}>
        <CardBody>
            <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <ColumnInfo label={"Balance"} value={balance} cardType={cardType} />
                <ChipIcon/>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                <ColumnInfo label={"CARD HOLDER"} value={cardHolder} cardType={cardType}/>
                <ColumnInfo label={"VALID THRU"} value={validThru} cardType={cardType}/>
            </Box>
        </CardBody>
        <CardFooter>
            <Typography variant={"h2"} color={cardType === "primary" ? theme.palette.common.white: theme.palette.secondary.main}>3778 **** **** 1234</Typography>
            <MastercardIcon fill={cardType === "primary" ? theme.palette.common.white : theme.palette.grey[100]}/>
        </CardFooter>
    </CardWrapper>
}

const ColumnInfo = ({label, value, cardType}: {label: string, value: string, cardType: CardType}) => {
    
    return <Box sx={{display: "flex", flexDirection: "column", gap: theme.spacing(0.181)}}>
        <Typography variant={"caption"} color={cardType === "primary" ? theme.palette.common.white : theme.palette.text.secondary}>{label}</Typography>
        <Typography variant={"body2"} color={cardType === "primary" ? theme.palette.common.white: theme.palette.secondary.main}>{value}</Typography>
    </Box>
}

const CardBody = styled(Box)`
    height: ${(props) => props.theme.spacing(6.688)};
    padding: ${(props) => props.theme.spacing(1.5, 1.625)};
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing(1.813)};
`;

const CardFooter = styled(Box)`
    display: flex;
    height: ${(props) => props.theme.spacing(4.375)};
    border-top: ${(props) => `${props.theme.spacing(0.063)} solid ${props.theme.palette.background.default}`};
    align-items: center;
    padding: ${(props) => props.theme.spacing(0, 1.625)};
    justify-content: space-between;
`;

const CardWrapper = styled(Box)<{cardType: CardType }>`
    background: ${(props) => props.cardType === "primary" ? "linear-gradient(180deg, #4C49ED 0%, #0A06F4 100%)" : props.theme.palette.common.white};
    width: ${(props) => props.theme.spacing(21.875)};
    height: ${(props) => props.theme.spacing(14.063)};
    border-radius: ${(props) => props.theme.spacing(1.563)};
    border: ${(props) => `${props.theme.spacing(0.063)} solid ${props.theme.palette.background.default}`};
`;