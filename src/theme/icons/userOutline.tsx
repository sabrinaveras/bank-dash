import {FC} from "react";
import {SvgIcon, SvgIconProps} from "@mui/material";

export const UserOutlineIcon: FC<SvgIconProps> = (props) => (
    <SvgIcon {...props} viewBox="0 0 25 25">
            <path d="M21.3389 16.1611C19.9774 14.7997 18.3569 13.7918 16.5888 13.1817C18.4825 11.8775 19.7266 9.69473 19.7266 7.22656C19.7266 3.24185 16.4847 0 12.5 0C8.51528 0 5.27344 3.24185 5.27344 7.22656C5.27344 9.69473 6.51753 11.8775 8.41123 13.1817C6.64316 13.7918 5.02266 14.7997 3.66118 16.1611C1.30024 18.5221 0 21.6611 0 25H1.95312C1.95312 19.1844 6.68442 14.4531 12.5 14.4531C18.3156 14.4531 23.0469 19.1844 23.0469 25H25C25 21.6611 23.6998 18.5221 21.3389 16.1611ZM12.5 12.5C9.59224 12.5 7.22656 10.1344 7.22656 7.22656C7.22656 4.31875 9.59224 1.95312 12.5 1.95312C15.4078 1.95312 17.7734 4.31875 17.7734 7.22656C17.7734 10.1344 15.4078 12.5 12.5 12.5Z" fill="#FF82AC"/>
    </SvgIcon>
)