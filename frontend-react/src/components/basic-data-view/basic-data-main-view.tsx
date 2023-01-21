import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignInMainView from "../sign-in-view/sign-in-main-view";
import DutyCheckMainView from "../duty-check/duty-check-main-view";
import RuleSetMainView from "../rule-set-view/rule-set-main-view";
import AdminMainView from "../admin-view/admin-main-view";

type Props = {};

type State = {};

export default class BasicDataMainView extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return <h1>Basic-Data
            <Router>
                <Routes>
                    <Route path="/" element={<SignInMainView />} />
                    <Route path="/duty-check" element={<DutyCheckMainView />} />
                    <Route path="/rule-set" element={<RuleSetMainView />} />
                    <Route path="/basic-data" element={<BasicDataMainView />} />
                    <Route path="/admin" element={<AdminMainView />} />
                </Routes>
            </Router></h1>;
    }
}