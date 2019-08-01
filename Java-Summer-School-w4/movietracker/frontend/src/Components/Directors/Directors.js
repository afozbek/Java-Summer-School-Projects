import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios-instance";

import Director from "./Director";
import Loading from "../../Util/Loading";

export default class Directors extends Component {
    state = {
        directors: [],
        loading: true
    };

    componentDidMount() {
        const jwttoken = localStorage.getItem("jwttoken");

        axios
            .get("/admin/director", {
                headers: { Authorization: "Bearer " + jwttoken }
            })
            .then(res => {
                console.log(res.data);

                this.setState({ directors: res.data, loading: false });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    err,
                    loading: false,
                    message: "Maybe you don't have permission to access"
                });
            });
    }

    render() {
        const directors = this.state.directors.map(director => {
            return (
                <Director key={director.directorId} directorData={director} />
            );
        });
        const directorTable = (
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>ID</th>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Surname</th>
                        <th style={{ textAlign: "center" }}>Birth Place</th>
                        <th style={{ textAlign: "center" }}>Operation </th>
                    </tr>
                </thead>

                <tbody>{directors}</tbody>
            </table>
        );

        const content = this.state.loading ? <Loading /> : directorTable;

        return (
            <div>
                <h1>Your Directors</h1>
                <h2>{this.state.message}</h2>
                <div>{content}</div>
                <Link to="/" style={{ marginTop: 30 }}>
                    Home Page
                </Link>
            </div>
        );
    }
}