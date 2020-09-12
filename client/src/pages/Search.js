import React from "react";
import API from "../utils/API";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(change) {
        change.preventDefault();
        this.setState({bookInput: change.target.value})
            }

            handleSearchClick(event) {
                event.preventDefault();
                API.searchBooks(this.state.bookInput)
                .then(
                    (response) => {
                        this.setState({bookData: response.data});
                        this.setState({bookInput: ""});
            }
        );
    }

    render() {
        return(
            <main>
                <SearchForm handleInputChange= {this.handleInputChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0 )?
                    <ResultsContainer bookData= {this.state.bookData} path= {this.props.match.path} /> : null    
            }
            </main>
        );
    }
}

export default Search;