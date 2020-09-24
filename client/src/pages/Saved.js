import React from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedBook: [],
    };
  }

  componentWillMount() {
    API.getBook()
      .then((response) => {
        this.setState({savedBook: response.data});
      })
      .catch((err) => {
        console.log("Saved Books error", err);
      });
  }

  render() {
    return (
      <main>
        <Results
          savedBook={this.state.savedBook}
          path={this.props.match.path}
        />
      </main>
    );
  }
}

export default Saved;
