import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Results from '../Results/Results';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <Search onInputChange={this.handleInputChange} />
                <Results suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
