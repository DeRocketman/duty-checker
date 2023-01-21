import {Component} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from "../../service/auth.service";

type Props = {};

type State = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    successful: boolean,
    message: string
};

export default class SignUpMainView extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this);

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            successful: false,
            message: ""
        };
    }

    validationSchema() {
        return Yup.object().shape({
            email: Yup.string()
                .email("Keine gültige E-Mail-Adresse.")
                .required("Eine E-Mail ist notwendig"),
            password: Yup.string()
                .required("Ein Password ist notwendig"),
            firstName: Yup.string()
                .required("Vorname ist notwendig"),
            lastName: Yup.string()
                .required("Nachname ist notwendig"),
        });
    }
    handleSignUp(formValue: {email: string; password: string; firstName: string; lastName: string}) {
        const user = formValue;

        this.setState({
            message: "",
            successful: false
        });

        AuthService.signUp(
            user
        ).then(
            res => {
                this.setState({
                    message: res.data.message,
                    successful: true
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
                    successful: false,
                    message: resMessage
                });
            }
        );
    }
    render() {
        const { successful, message } = this.state;

        const initialValues = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        };

        return (
            <h1>SignUp-View</h1>
        )
    }

}