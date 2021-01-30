import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
//import { Button, Typography } from '@material-ui/core';
import MyTableRow from './tablerow.component';
//import CustomizedDialogs from './dialog.component';
//import Button from '@material-ui/core/Button';

import http from "../http-common";

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            members: [],
            searchTerm: ""
        };
        this.props.onNavbarTitleChange("All members");
    }

    simplifiedFunction(value) {
        console.log(value);
    }

    getData = (search) => {
        this.setState({
            members: [],
            isLoading: true
        });

        var searchTerm = "";
        if (this.state.searchTerm) {
            searchTerm = "/" + this.state.searchTerm
        }

        http.get('/members' + searchTerm)
            .then(response => {
                this.setState({
                    members: response.data,
                    isLoading: false
                });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.search !== this.props.search) {
            this.setState({
                searchTerm: this.props.search
            });
            this.getData();
        }
    }

    componentDidMount() {
        this.getData();
    }
    tabRow() {
        return this.state.members.map((obj, idx) => {
            return <MyTableRow obj={obj} key={idx} getData={this.getData} />;
        })
    }

    render() {
        return (
            <div >
                <TableContainer component={Paper} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="left">Firstname</TableCell>
                                <TableCell align="left">Lastname</TableCell>
                                <TableCell align="left">Birthday</TableCell>
                                <TableCell align="left">Adress</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!this.state.isLoading && (this.state.members.length > 0 ? this.tabRow() : <TableRow><TableCell align="center" colSpan={5}>No data</TableCell></TableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer>
                {this.state.isLoading && <LinearProgress />}

            </div>
        );
    }
}