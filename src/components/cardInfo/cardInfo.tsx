import {Box, styled, SvgIconProps, Typography} from "@mui/material";
import {FC} from "react";
import {theme} from "../../theme";

export interface CardInfoProps{
    label: string;
    value: string;
    
    backgroundColor: string;
    Icon: FC<SvgIconProps>;
}

export const CardInfo = ({label, value, backgroundColor, Icon}: CardInfoProps) => {
    return <CardInfoWrapper>
            <Box sx={{backgroundColor,
                width: theme.spacing(4.375),
                height: theme.spacing(4.375),
                borderRadius: theme.spacing(3.125),
                display: "flex",
                alignItems: "center", justifyContent: "center"
            }}>
                <Icon sx={{width: theme.spacing(1.938), height: theme.spacing(1.938)}}/>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Typography variant={"body1"} color={theme.palette.text.secondary}>{label}</Typography>
                <Typography variant={"h3"} color={theme.palette.text.primary}>{value}</Typography>
            </Box>
    </CardInfoWrapper>
}

const CardInfoWrapper = styled(Box)`
    display: flex;
    gap: ${(props) => props.theme.spacing(0.938)};
    background-color: ${(props) => props.theme.palette.common.white};
    border-radius: ${(props) => props.theme.spacing(1)};
    padding: ${(props) => props.theme.spacing(1.563)};
`