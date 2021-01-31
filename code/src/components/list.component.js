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
        this.getData = this.getData.bind(this);
        this.state = {
            isLoading: true,
            members: []
        };
        this.props.onNavbarTitleChange("All Members");
    }

    getData(searchterm = "") {
        this.setState({
            members: [],
            isLoading: true,
        });

        if (searchterm !== "") {
            searchterm = "/" + searchterm
        }

        http.get('/members' + searchterm)
            .then(response => {
                this.setState({
                    members: response.data,
                    isLoading: false
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.search !== this.props.search) {
            this.getData(this.props.search);
        } else if (prevProps.listRefresh !== this.props.listRefresh) {
            this.getData();
        }

    }

    componentDidMount() {
        this.getData(this.props.search);
    }

    tabRow() {
        return this.state.members.map((obj, idx) => {
            return <MyTableRow obj={obj} key={idx} search={this.props.search} getData={this.getData} />;
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