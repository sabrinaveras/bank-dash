import {ChangeEvent, useState} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import {theme} from "../../theme";

export interface TableTransactionProps{}

interface Column{
    id: "description" | "transactionId" | "type" | "card" | "date" | "amount",
    label: string;
    minWidth?: number;
    align?: "right";
}

interface Data{
    description: string;
    transactionId: string;
    type: string;
    card: string;
    date: string;
    amount: string;
}

const columns: readonly Column[] = [
    {id: "description", label: "Description"},
    {id: "transactionId", label: "Transaction ID"},
    {id: "type", label: "Type"},
    {id: "card", label: "Card"},
    {id: "date", label: "Date"},
    {id: "amount", label: "Amount"},
]

const createData = (description: string,
transactionId: string,
type: string,
card: string,
date: string,
amount: string,
): Data => {
    return {description, transactionId, type, card, date, amount}
}

const rows = [
    createData("Spotify Subscription", "#12548796", "Shopping", "1234 ****", "28 Jan, 12:30 AM", "-$2,500"),
    createData("Freepik Sales", "#12548796", "Transfer", "1234 ****", "25 Jan, 10:40 AM", "+$750"),
    createData("Mobile Service", "#12548796", "Service", "1234 ****", "20 Jan, 10:40 AM", "-$150"),
    createData("Wilson", "#12548796", "Transfer", "1234 ****", "15 Jan, 03:29 AM", "-$1,050"),
    createData("Emilly", "#12548796", "Transfer", "1234 ****", "14 Jan, 10:40 AM", "-$840"),
]

export const TableTransaction = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    return (
        <Paper sx={{width: "100%", overflow: "hidden", backgroundColor: theme.palette.common.white}}>
            <TableContainer sx={{maxHeight: theme.spacing(24.813)}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth, color: theme.palette.text.secondary, backgroundColor: theme.palette.common.white}}>
                                        {column.label}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow hover key={row.description} tabIndex={-1}>
                                        {
                                            columns.map((column) => {
                                                const value = row[column.id];
                                                
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                )
                                            })
                                        }
                                    </TableRow>
                                ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[10, 25, 30]}
            component={"div"}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}