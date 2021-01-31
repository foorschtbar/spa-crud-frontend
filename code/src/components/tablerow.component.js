import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Link as RouterLink } from 'react-router-dom';

import http from "../http-common";

class MyTableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(event) {
        http.delete('/member/' + this.props.obj.id)
            .then((response) => {
                this.props.getData(this.props.search);
            }
            )
            .catch(err => console.log(err))

    }

    render() {
        return (
            <TableRow key={this.props.obj.id} >
                <TableCell component="th" scope="row">{this.props.obj.id}</TableCell>
                <TableCell align="left">{this.props.obj.firstname}</TableCell>
                <TableCell align="left">{this.props.obj.lastname}</TableCell>
                <TableCell align="left">{this.props.obj.birthday}</TableCell>
                <TableCell align="left">{this.props.obj.street}, {this.props.obj.city}</TableCell>
                <TableCell align="right">
                    <IconButton aria-label="view" component={RouterLink} to={process.env.PUBLIC_URL + "/view/" + this.props.obj.id}>
                        <AccountBoxIcon />
                    </IconButton>
                    <IconButton aria-label="edit" component={RouterLink} color="primary" to={process.env.PUBLIC_URL + "/edit/" + this.props.obj.id}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="secondary" onClick={this.delete}>
                        <DeleteIcon />
                    </IconButton>
                    { /* <Button variant="outlined" color="primary" startIcon={<EditIcon />}></Button>&nbsp;
                                            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}></Button> */ }
                </TableCell>
            </TableRow >
        );
    }
}

export default MyTableRow;