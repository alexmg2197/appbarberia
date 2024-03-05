import './verServicio.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { React, useState, useEffect } from "react";
import { getAPI, postAPI } from "../../utils/useAxios";

const VerServicio = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        getAPI('ListarServicios')
            .then((response) => {
                setServicios(response.data)
            })
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "rgb(0, 93, 177)",
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
        [`&.${tableCellClasses.footer}`]: {
            backgroundColor: "rgb(254, 34, 26)",
            fontSize: 14,
        },
    }));


    const columns = [
        { id: 'nombre', label: 'Nombre', minWidth: 100, align: 'center' },
        { id: 'descripcion', label: 'Descripcion', minWidth: 140, align: 'center' },
        { id: 'precio', label: 'Precio', minWidth: 120, align: 'center' },
        { id: 'opciones', label: 'Opciones', minWidth: 120, align: 'center' },
    ];
    return (
        <div className='container d-flex flex-colum align-items-start pt-2 mb-0'>
            <div className="container-fluid w-100 mt-0">
                <div className="p-3">
                    <h1 className="text-center">Lista de Servicios</h1>
                </div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 660 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead >
                                <TableRow>
                                    {columns.map((column) => (
                                        <StyledTableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </StyledTableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    servicios !== null && (
                                        (servicios?.unique) ? (
                                            servicios?.unique[0].Estatus === 'Finalizado' ? (
                                                <TableRow hover role="checkbox" key={servicios?.unique[0].IdServicio}>
                                                    <TableCell align="center">{servicios?.unique[0].Nombre}</TableCell>
                                                    <TableCell align="center">{servicios?.unique[0].Descripcion}</TableCell>
                                                    <TableCell align="center">{servicios?.unique[0].Precio}</TableCell>

                                                </TableRow>
                                            ) : (
                                                <TableRow hover role="checkbox" key={servicios?.unique[0].IdServicio}>
                                                    <TableCell align="center" colSpan="9">No Hay servicios Registrados 😎</TableCell>
                                                </TableRow>
                                            )
                                        ) : (
                                            servicios
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row) => {
                                                    return (
                                                        <TableRow hover role="checkbox" key={row.IdServicio}>
                                                            <TableCell align="center">{row.Nombre}</TableCell>
                                                            <TableCell align="center">{row.Descripcion}</TableCell>
                                                            <TableCell align="center">{row.Precio}</TableCell>

                                                        </TableRow>
                                                    );

                                                })
                                        )

                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        sx={{ backgroundColor: 'rgb(254, 34, 26)', color: 'white', }}
                        rowsPerPageOptions={[5, 10, 25, 100]}
                        component="div"
                        count={servicios.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    )
}
export default VerServicio