import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import http from "../http-common";

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            message: '',
            error: false,
            isLoading: false,
            success: false,
            errorfields: [],
            form: {}
        }
    }

    handleChange(e) {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.id]: e.target.value
            }
        })
    }

    onSubmit(e) {
        e.preventDefault();
        http.post('/member', this.state.form)
            .then((response) => {

                console.log(response.data)
                this.setState({
                    error: false,
                    message: "Done!",
                    success: true
                })

                setTimeout(() => this.props.history.push('/'), 1000);

            })
            .catch((error) => {
                console.log(error.response);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (error.response.data.errors) {
                        var list = error.response.data.errors.map((error) => { return (<div>- {error}</div>); });

                        this.setState({
                            error: true,
                            errorfields: (error.response.data.errorfields ? error.response.data.errorfields : []),
                            message: list
                        })

                    }
                } else {
                    // Something happened in setting up the request that triggered an Error
                    this.setState({
                        error: true,
                        message: "Something failed at backend"
                    })
                }

            });
        console.log(this.state)
    }

    render() {
        return (
            <div>
                { this.state.message && <><Alert severity={this.state.error ? "error" : this.state.success ? "success" : "info"} >{this.state.message}</Alert><br /></>}
                <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
                    <FormControl>
                        <Box margin={1}>
                            <TextField key="firstname" id="firstname" variant="outlined" label="Firstname" required disabled={this.state.success} error={this.state.errorfields.includes('firstname')} autoFocus={true} onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <TextField key="lastname" id="lastname" variant="outlined" label="Lastname" required disabled={this.state.success} error={this.state.errorfields.includes('lastname')} onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <TextField key="birthday" id="birthday" variant="outlined" label="Birthday" InputLabelProps={{
                                shrink: true,
                            }} type="date" required disabled={this.state.success} error={this.state.errorfields.includes('birthday')} onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <TextField key="street" id="street" variant="outlined" label="Street" required disabled={this.state.success} error={this.state.errorfields.includes('street')} onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <TextField key="city" id="city" variant="outlined" label="City" required disabled={this.state.success} error={this.state.errorfields.includes('city')} onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <TextField key="phone" id="phone" variant="outlined" label="Phone" disabled={this.state.success} error={this.state.errorfields.includes('phone')} onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <TextField key="email" id="email" variant="outlined" label="eMail" disabled={this.state.success} error={this.state.errorfields.includes('email')} type="email" onChange={this.handleChange} />
                        </Box>
                        <Button type="submit" variant="contained" disabled={this.state.success} color="primary">
                            Create
                    </Button>
                    </FormControl>
                </form>
            </div >
        )
    }
}