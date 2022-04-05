import React from 'react';
import {connect} from 'react-redux';
import AppState from '../redux/state/AppState';


interface Props {
    //  TODO: add Props
}

interface State {
    //  TODO: add State
}

export class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            //  TODO: set default State
        };
    }


    public render() {
        return (
            <div className='app'>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        //  TODO: set mapStateToProps
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        //  TODO: set mapDispatchToProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
