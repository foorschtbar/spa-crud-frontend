import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
//import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
//import { Button, Typography } from '@material-ui/core';
import { API_BASE_URL } from './config'

export class Members extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: null,
            isLoading: true,
            test: "lol"
        };
    }

    componentDidMount() {
        this.getMembers();
    }

    async getMembers() {
        if (!this.state.members) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch(API_BASE_URL + '/members');
                const data = await response.json();
                this.setState({ members: data, isLoading: false });
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }

    render() {
        return (
            <div >
                { /*<Typography variant="h4" gutterBottom>
                    All Members
        </Typography> */ }
                { this.state.isLoading ?
                    <LinearProgress /> :
                    this.state.members && <TableContainer component={Paper} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="left">Firstname</TableCell>
                                    <TableCell align="left">Lastname</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Phone</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.members.map((member) => (
                                    <TableRow key={member.id}>
                                        <TableCell component="th" scope="row">{member.id}</TableCell>
                                        <TableCell align="left">{member.firstname}</TableCell>
                                        <TableCell align="left">{member.lastname}</TableCell>
                                        <TableCell align="left">{member.firstname}, {member.lastname}</TableCell>
                                        <TableCell align="left">{member.phone}</TableCell>
                                        <TableCell align="left">{member.email}</TableCell>
                                        <TableCell align="right">
                                            <IconButton aria-label="edit" color="primary">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete" color="secondary">
                                                <DeleteIcon />
                                            </IconButton>
                                            { /* <Button variant="outlined" color="primary" startIcon={<EditIcon />}></Button>&nbsp;
                                            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}></Button> */ }
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </div>
        );
    }
}

export default (Members)