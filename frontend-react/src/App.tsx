import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import SignInMainView from "./components/sign-in-view/sign-in-main-view";
import DutyCheckMainView from "./components/duty-check/duty-check-main-view";
import BasicDataMainView from "./components/basic-data-view/basic-data-main-view";
import RuleSetMainView from "./components/rule-set-view/rule-set-main-view";
import AdminMainView from "./components/admin-view/admin-main-view";
import MainMenuView from "./components/navigation/main-menu-view";
import SignUpMainView from "./components/sign-up-view/sign-up-main-view";
import RuleSetCreateView from "./components/rule-set-view/rule-set-create-view";
import RuleSetEditView from "./components/rule-set-view/rule-set-edit-view";


export default function App() {
    return (
        <Router>
            <MainMenuView />
            <Routes>
                <Route path="/" element={<SignInMainView />} />
                <Route path="/duty-check" element={<DutyCheckMainView />} />
                <Route path="/rule-set" element={<RuleSetMainView />} />
                <Route path="/rule-set/create" element={<RuleSetCreateView/>} />
                <Route path="/rule-set/edit/:id" element={<RuleSetEditView/>} />
                <Route path="/basic-data" element={<BasicDataMainView />} />
                <Route path="/admin" element={<AdminMainView />} />
                <Route path="/sign-up" element={<SignUpMainView />} />
            </Routes>
        </Router>
    )
}


