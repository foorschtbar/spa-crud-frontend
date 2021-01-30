import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { API_BASE_URL } from './config'

class Members extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: null,
            isLoading: true
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
            <div>
                { this.state.isLoading && <div>Loading...</div>}
                { this.state.members && <TableContainer component={Paper} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Firstname</TableCell>
                                <TableCell align="right">Lastname</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.members.map((member) => (
                                <TableRow key={member.id}>
                                    <TableCell component="th" scope="row">{member.id}</TableCell>
                                    <TableCell align="right">{member.firstname}</TableCell>
                                    <TableCell align="right">{member.lastname}</TableCell>
                                    <TableCell align="right">{member.firstname}, {member.lastname}</TableCell>
                                    <TableCell align="right">{member.phone}</TableCell>
                                    <TableCell align="right">{member.email}</TableCell>
                                    <TableCell align="right"><Button>Edit</Button></TableCell>
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

export default Members