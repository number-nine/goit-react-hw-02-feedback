// import { Container } from 'components/App/App.styled';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  handleReviewCounter = e => {
    
    e.preventDefault();
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          {Object.keys(this.state).map(element => (
            <button
              type="button"
              key={element}
              name={element}
              onClick={this.handleReviewCounter}
            >
              {element}
            </button>
          ))}
        </div>
        <h2>Statistics</h2>
        {Object.keys(this.state).map(element => (
          <p key={element}>
            {App.capitalize(element)}: {this.state[element]}
          </p>
        ))}
        <p>Total:</p>
        <p>Positive feedback:</p>
      </>
    );
  }
}

export default App;
