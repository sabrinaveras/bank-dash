import {FC} from "react";
import {SvgIcon, SvgIconProps} from "@mui/material";

export const MastercardIcon: FC<SvgIconProps> = (props) => (
    <SvgIcon {...props} viewBox="0 0 44 30">
        <circle cx="15" cy="15" r="15" fill={props.fill ? props.fill : "white"} fill-opacity="0.5"/>
        <circle cx="29" cy="15" r="15" fill={props.fill ? props.fill : "white"} fill-opacity="0.5"/>
    </SvgIcon>
)

//width="44" height="30"