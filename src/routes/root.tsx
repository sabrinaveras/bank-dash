import {Routes, Route} from "react-router";
import {DashboardPage} from "../pages/dashboard";
import {Page} from "../pages/page";
import {TransactionsPage} from "../pages/transactions";
import {AccountsPage} from "../pages/accounts";
import {InvestmentsPage} from "../pages/investments";
import {CreditCardsPage} from "../pages/creditCards";
import {LoansPage} from "../pages/loans";
import {ServicesPage} from "../pages/services";
import {SettingPage} from "../pages/setting";

const pages: Page[] = [
    DashboardPage,
    TransactionsPage,
    AccountsPage,
    InvestmentsPage,
    CreditCardsPage,
    LoansPage,
    ServicesPage,
    SettingPage
]

export const Root = () => {
    
    return(
        <Routes>
            {
                pages.map((page) => (
                    <Route key={page.path} path={page.path} element={<page.component/>}/>
                ))
            }
        </Routes>
    )
}