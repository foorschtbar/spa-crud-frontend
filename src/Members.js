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

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstname', headerName: 'First name', width: 130 },
    { field: 'lastname', headerName: 'Last name', width: 130 }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const rows2 = [{ "id": 1, "firstname": "Silke", "lastname": "Pfeffer", "phone": "08041 18 33 29", "email": "SilkePfeffer@armyspy.com", "address": "Gubener Str. 98, 83646 Bad T\u00f6lz " }, { "id": 2, "firstname": "Franziska", "lastname": "Sanger", "phone": "05846 95 15 74", "email": "FranziskaSanger@teleworm.us", "address": "Lietzenburger Stra\u00dfe 84, 29478 H\u00f6hbeck" }, { "id": 3, "firstname": "Alexander   ", "lastname": "Engel", "phone": "07557 97 77 37", "email": "AlexanderEngel@armyspy.com", "address": "Hedemannstasse 32, 92366 Hohenfels" }, { "id": 10, "firstname": "Felix", "lastname": "Engel", "phone": "0123 456789", "email": "Felix.Engel@gmail.com", "address": "Hedemannstasse 32, 92366 Hohenfels" }]

//const [isLoaded, setIsLoaded] = useState(false);
//const [rowData, setRowData] = useState([]);

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
                console.debug(data);
                console.debug(rows2);
                //setIsLoaded(true);
                //setRowData(response.data);
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

    /*render() {
        return (
            <div>
                <h1>All Members</h1>
                {this.state.isLoading && <Spinner animation="border" />}
                {this.state.members &&
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.members.map(
                                    member =>
                                        <tr id={member.id} key={member.id}>
                                            <td>{member.id}</td>
                                            <td>{member.lastname}, {member.firstname}</td>
                                            <td>
                                                Increase Count button
                                            </td>
                                        </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                }
            </div>
        );
    }*/
}

export default Members