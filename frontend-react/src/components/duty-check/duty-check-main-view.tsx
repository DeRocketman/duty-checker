import {Component} from "react";
import {render} from "react-dom";
import {dividerClasses} from "@mui/material";

type Props = {};

type State = {};

export default class DutyCheckMainView extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return <h1>Duty-Check</h1>;
    }
}