import {Button as ButtonMUI, Typography} from "@mui/material";
import {theme} from "../../theme";


export interface ButtonProps{
    label: string;
}

export const Button = ({label}: ButtonProps) => {
    
    return (
        <ButtonMUI
        sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            textTransform: "capitalize",
            padding: theme.spacing(0.875, 2.438),
            borderRadius: theme.spacing(0.5),
        }}
        >
            <Typography variant={"h4"}>{label}</Typography>
        </ButtonMUI>
    )
}