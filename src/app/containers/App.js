import React from "react";
import { connect } from "react-redux";
import { User } from '../components/User';
import { Main } from '../components/Main';
import { setName } from '../actions/userActions'

class App extends React.Component {
    render() {
        const newName = 'Stas';
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName(newName)}/>
                <User username={this.props.user.name}/> {/* теперь это user из mapStateToProps */}
            </div>
        );
    }
}

// какие свойства моего глобального стейта я хочу использовать в этом компоненте
// и каким локальным свойствам в этом компоненте они соответствуют
const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
