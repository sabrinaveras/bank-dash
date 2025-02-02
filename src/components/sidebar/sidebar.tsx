import {FC, ReactNode, useMemo, useState} from "react";
import {useNavigate, useLocation} from "react-router";

import {
    AppBar, Avatar,
    Box,
    CssBaseline,
    Drawer, IconButton,
    List, styled, SvgIconProps,
    Toolbar, Typography
} from "@mui/material";
import {SIDEBAR_WIDTH} from "../../utils/constants";

import {DashboardPage} from "../../pages/dashboard";
import {theme} from "../../theme";
import {TransactionsPage} from "../../pages/transactions";
import {AccountsPage} from "../../pages/accounts";
import {InvestmentsPage} from "../../pages/investments";
import {CreditCardsPage} from "../../pages/creditCards";
import {LoansPage} from "../../pages/loans";
import {ServicesPage} from "../../pages/services";
import {SettingPage} from "../../pages/setting";
import {Page} from "../../pages/page";
import {
    CreditCardIcon,
    HomeIcon,
    InvestmentProps, LoanIcon,
    LogoIcon,
    MenuIcon,
    NotificationIcon, ServiceIcon,
    SettingIcon,
    TransferIcon,
    UserIcon, UserMockIcon,
} from "../../theme/icons";

export interface SidebarProps{
    children: ReactNode
}

export const Sidebar = ({children}: SidebarProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    
    const optionActive = useMemo(() => {
        switch (location.pathname) {
            case DashboardPage.path:
                return DashboardPage;
            case TransactionsPage.path:
                return TransactionsPage;
            case AccountsPage.path:
                return AccountsPage;
            case InvestmentsPage.path:
                return InvestmentsPage;
            case CreditCardsPage.path:
                return CreditCardsPage;
            case LoansPage.path:
                return LoansPage;
            case ServicesPage.path:
                return ServicesPage;
            default:
                return SettingPage;
        }
    }, [location.pathname])
    
    const handleDrawerClose = () => {
        setIsClosing(true);
    };
    
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    }
    
    const handleDrawerToggle = () => {
        if(!isClosing){
            setMobileOpen(!mobileOpen)
        }
    }
    
    const handleGoPage = (page: Page) => {
        console.log("page: ", page);
        navigate(page.path);
    };
    
    return (
        <Box sx={{ display: 'flex', width: "100%", height: "100dvh", backgroundColor: theme.palette.common.white }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: theme.palette.common.white,
                    height: theme.spacing(6.313),
                    borderBottom: `${theme.spacing(0.063)} solid ${theme.palette.info.light}`,
                    boxShadow: "none",
                    width: { sm: `calc(100% - ${SIDEBAR_WIDTH}px)` },
                    ml: { sm: `${SIDEBAR_WIDTH}px` },
                }}
            >
                <Toolbar sx={{
                    height: "100%",
                    backgroundColor: theme.palette.common.white,
                    display:"flex",
                    justifyContent: "space-between",
                }}
                >
                    <Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h1" fontWeight={700} color={theme.palette.secondary.main}>
                            {optionActive.title}
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", gap: theme.spacing(1.875) }}>
                        <IconButton sx={{backgroundColor: theme.palette.grey[50], width: "45px", height: "45px"}}>
                            <SettingIcon sx={{width: "25px", height: "25px"}} fill={theme.palette.text.secondary}/>
                        </IconButton>
                        <IconButton sx={{backgroundColor: theme.palette.grey[50], width: "45px", height: "45px"}}>
                            <NotificationIcon sx={{width: "25px", height: "25px"}}/>
                        </IconButton>
                        
                        <IconButton sx={{backgroundColor: theme.palette.grey[50], width: "45px", height: "45px"}}>
                            <UserMockIcon sx={{width: "45px", height: "45px"}}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{height: theme.spacing(6.313), width: { sm: SIDEBAR_WIDTH }, flexShrink: { sm: 0 } }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { backgroundColor: theme.palette.common.white, boxSizing: 'border-box', width: SIDEBAR_WIDTH },
                    }}
                >
                    <OptionsDrawer optionActive={optionActive} onGoPage={handleGoPage}/>
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            backgroundColor: theme.palette.common.white,
                            boxSizing: 'border-box', width: SIDEBAR_WIDTH
                        },
                    }}
                    open
                >
                   <OptionsDrawer optionActive={optionActive} onGoPage={handleGoPage}/>
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3,
                    width: { sm: `calc(100% - ${SIDEBAR_WIDTH}px)` }
            }}
            >
                <Toolbar/>
                {children}
            </Box>
        </Box>
    );
}

const OptionsDrawer = ({optionActive, onGoPage}:{optionActive: Page, onGoPage: (page: Page) => void}) => {
    return (
        <>
            <Toolbar sx={{height: theme.spacing(6.313)}}>
                <LogoIcon sx={{width: "183px", height: "36px"}}/>
            </Toolbar>
            <List>
               <ListItem isActive={optionActive.path === DashboardPage.path} label={DashboardPage.title} Icon={HomeIcon} page={DashboardPage} onGoPage={onGoPage}/>
               <ListItem isActive={optionActive.path === TransactionsPage.path} label={TransactionsPage.title} Icon={TransferIcon} page={TransactionsPage} onGoPage={onGoPage}/>
                <ListItem isActive={optionActive.path === AccountsPage.path} label={AccountsPage.title} Icon={UserIcon} page={AccountsPage} onGoPage={onGoPage}/>
                <ListItem isActive={optionActive.path === InvestmentsPage.path} label={InvestmentsPage.title} Icon={InvestmentProps} page={InvestmentsPage} onGoPage={onGoPage}/>
                <ListItem isActive={optionActive.path === CreditCardsPage.path} label={CreditCardsPage.title} Icon={CreditCardIcon} page={CreditCardsPage} onGoPage={onGoPage}/>
                <ListItem isActive={optionActive.path === LoansPage.path} label={LoansPage.title} Icon={LoanIcon} page={LoansPage} onGoPage={onGoPage}/>
                <ListItem isActive={optionActive.path === ServicesPage.path} label={ServicesPage.title} Icon={ServiceIcon} page={ServicesPage} onGoPage={onGoPage}/>
                <ListItem isActive={optionActive.path === SettingPage.path} label={SettingPage.title} Icon={SettingIcon} page={SettingPage} onGoPage={onGoPage}/>
            </List>
        </>
    )
}

const ListItem = ({isActive, label, Icon, page, onGoPage}:{isActive: boolean; label: string, Icon: FC<SvgIconProps>, page: Page, onGoPage: (page: Page) => void}) => {
    
    return (
        <ListItemWrapper onClick={() => onGoPage(page)}>
            <ListItemBorder isActive={isActive}/>
            
            <Box sx={{display: "flex", width: "100%", height: "100%", alignItems: "center", gap: theme.spacing(1.625)}}>
                <Icon sx={{width: theme.spacing(1.563), height: theme.spacing(1.563)}} fill={isActive ? theme.palette.primary.main : theme.palette.text.disabled}/>
                <Typography variant={"h4"} sx={{color: isActive ? theme.palette.primary.main : theme.palette.text.disabled}}>{label}</Typography>
            </Box>
        </ListItemWrapper>
    )
}

const ListItemBorder = styled(Box)<{isActive: boolean}>`
    width: ${(props) => props.theme.spacing(0.375)};
    height: 100%;
    background-color: ${(props) => props.isActive ? theme.palette.primary.main : theme.palette.common.white};
    border-top-right-radius: ${(props) => props.theme.spacing(0.625)};
    border-bottom-right-radius: ${(props) => props.theme.spacing(0.625)};
`;

const ListItemWrapper = styled(Box)`
    width: 100%;
    display: flex;
    height: ${(props) => props.theme.spacing(3.75)};
    align-items: center;
    gap: ${(props) => props.theme.spacing(2.375)};
    
    cursor: pointer;
`;