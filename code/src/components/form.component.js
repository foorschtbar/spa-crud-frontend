import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import http from "../http-common";

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            message: '',
            error: false,
            isLoading: false,
            disabled: false,
            url: '',
            errorfields: [],
            form: {
                firstname: '',
                lastname: '',
                birthday: '',
                street: '',
                city: '',
                phone: '',
                email: ''
            }
        }

        switch (this.props.formmode) {
            case "edit":
                this.props.onNavbarTitleChange("Edit Member");
                this.state = {
                    ...this.state,
                    button: "Update",
                    url: '/' + this.props.match.params.id,
                    isLoading: true,
                    buttonIsSubmit: true,
                }
                break;
            case "create":
                this.props.onNavbarTitleChange("Add Member");
                this.state = {
                    ...this.state,
                    button: "Create",
                    buttonIsSubmit: true,
                }
                break;
            default:
            case "view":
                this.props.onNavbarTitleChange("View Member");
                this.state = {
                    ...this.state,
                    button: "Close",
                    url: '/' + this.props.match.params.id,
                    disabled: true,
                    isLoading: true,
                    isSubmit: true
                }
                break;
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

    componentDidMount() {
        if (this.state.url !== '') {
            http.get('/member/' + this.props.match.params.id)
                .then(response => {
                    this.setState({
                        form: response.data,
                        isLoading: false
                    });
                })
                .catch(function (error) {
                    console.log(error);
                    this.setState({
                        isLoading: false
                    });
                })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.buttonIsSubmit) {
            http.post('/member' + this.state.url, this.state.form)
                .then((response) => {
                    this.setState({
                        error: false,
                        message: "Done!",
                        disabled: true
                    })

                    setTimeout(() => this.props.history.push(process.env.PUBLIC_URL + '/'), 1000);

                })
                .catch((error) => {
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
                        console.log('Error', error.message);
                        this.setState({
                            error: true,
                            message: "Something failed at backend"
                        })
                    }
                });
        } else {
            this.props.history.push(process.env.PUBLIC_URL + '/')
        }
    }

    render() {
        return (
            <div>
                { this.state.isLoading && <LinearProgress />}
                { this.state.message && <><Alert severity={this.state.error ? "error" : this.state.disabled ? "success" : "info"} >{this.state.message}</Alert><br /></>}
                <form noValidate autoComplete="off" onSubmit={this.onSubmit} >
                    <FormControl>
                        <Box margin={1}>
                            <TextField
                                id="firstname"
                                variant="outlined"
                                label="Firstname"
                                shrink="true"
                                required
                                disabled={this.state.disabled || this.state.isLoading}
                                error={this.state.errorfields.includes('firstname')}
                                value={this.state.form.firstname}
                                //autoFocus={true}
                                onChange={this.handleChange}
                            />
                        </Box>
                        <Box margin={1}>
                            <TextField
                                id="lastname"
                                variant="outlined"
                                label="Lastname"
                                shrink="true"
                                required
                                disabled={this.state.disabled || this.state.isLoading}
                                error={this.state.errorfields.includes('lastname')}
                                value={this.state.form.lastname}
                                onChange={this.handleChange}
                            />
                        </Box>
                        <Box margin={1}>
                            <TextField
                                id="birthday"
                                variant="outlined"
                                label="Birthday"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="date"
                                required
                                disabled={this.state.disabled || this.state.isLoading}
                                error={this.state.errorfields.includes('birthday')}
                                value={this.state.form.birthday}
                                onChange={this.handleChange}
                            />
                        </Box>
                        <Box margin={1}>
                            <TextField
                                id="street"
                                variant="outlined"
                                label="Street"
                                shrink="true"
                                required
                                disabled={this.state.disabled || this.state.isLoading}
                                error={this.state.errorfields.includes('street')}
                                value={this.state.form.street}
                                onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <TextField
                                id="city"
                                variant="outlined"
                                label="City"
                                shrink="true"
                                required
                                disabled={this.state.disabled || this.state.isLoading}
                                error={this.state.errorfields.includes('city')}
                                value={this.state.form.city}
                                onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <TextField
                                id="phone"
                                variant="outlined"
                                label="Phone"
                                shrink="true"
                                disabled={this.state.disabled || this.state.isLoading} error={this.state.errorfields.includes('phone')}
                                value={this.state.form.phone}
                                onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <TextField
                                id="email"
                                variant="outlined"
                                label="eMail"
                                shrink="true"
                                disabled={this.state.disabled || this.state.isLoading}
                                error={this.state.errorfields.includes('email')}
                                value={this.state.form.email}
                                type="email" onChange={this.handleChange} />
                        </Box>
                        <Box margin={1}>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                disabled={this.state.isLoading || (this.state.disabled && this.state.buttonIsSubmit)}
                                color="primary"
                                size="large">
                                {this.state.button}
                            </Button>
                        </Box>
                    </FormControl>
                </form>
            </div >
        )
    }
}