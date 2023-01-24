import React, {Component} from  'react';
import './testcomponent.css';

class TestComponent extends Component {

    constructor() {
        super();
        this.state = {
            testcomponent: []
        };
    };

    componentDidMount(){
        fetch('/api/testendpoint').then(
            res => res.json()
        ).then(testcomponent => this.setState({testcomponent}, () => console.log('Test Component Fetched...', testcomponent)));
    }

    render() {
        return (
            <div className="testcomponent">
                <h1>Test Component</h1>
                <h3>{this.state.testcomponent.name}</h3>
                <br />
                <h3>{this.state.testcomponent.status}</h3>
                <h4>{this.state.testcomponent.message}</h4>
            </div>
        );
    }
}

export default TestComponent;