import { response } from "express";
import React from "react";
import API from "../utils/API";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentDidMount() {
        API.getBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ) .catch(
            (err) => {
                console.log("Saved Books error", err);
            }
        );
    }

    render() {
        return(
            <main>
                <ResultContainer saveBooks={this.state.savedBooks} path={this.props.match.path} />
            </main>
        );
    }
}

export default Saved;