import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import {Component} from "react";
import AuthService from "../../service/auth.service";
import {Card, CardContent, CardHeader, TextField, Button } from "@mui/material";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type Props = {};

type State = {
    redirect: string | null,
    email: string,
    password: string,
    loading: boolean,
    message: string,
}
export default class SignInMainView extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);

        this.state = {
            redirect: null,
            email: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser) {
            this.setState({ redirect: "/duty-check" });
        }
    }
    /**
    componentWillUnmount() {
        window.location.reload();
    }
    **/
    validationSchema() {
        return Yup.object().shape({
            email: Yup.string()
                .email("Keine gültige E-Mail-Adresse")
                .required("E-Mail ist notwendig"),
            password: Yup.string().required("Passwort ist notwendig"),
        });
    }

    handleSignIn(formValue: {email: string; password: string}) {
        const {email, password} = formValue;

        this.setState({
            message: "",
            loading: true
        });
        AuthService.signIn(email, password).then(
            () => {
                this.setState({
                    redirect: "/duty-check"
                });
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        )
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }
        const { loading, message } = this.state;

        const initialValues = {
            email: "",
            password: "",
        };

        return (
            <Formik
                initialValues={initialValues}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSignIn}
            >
                <Form>
                    <Card>
                        <CardHeader>
                            <h1>Login</h1>
                        </CardHeader>
                        <CardContent>
                            <TextField id="email-text-field" name="email" type="email" label="E-Mail" variant="standard" />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="alert alert-danger"
                            />
                            <TextField id="pwd-text-field" name="password" type="password" label="Passwort" variant="standard" autoComplete="current-password" />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="alert alert-danger"
                            />
                            <div className="button-bar">
                                <Button variant="contained"
                                        id="sign-in-button"
                                        type="submit">Anmelden</Button>
                                <Button variant="contained"
                                        type="button"
                                        color="secondary">Registrieren</Button>
                            </div>
                        </CardContent>
                    </Card>
                </Form>
            </Formik>
        );
    }
}
