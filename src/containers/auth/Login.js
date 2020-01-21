import React from 'react';
import { connect } from 'react-redux';
import  {View,Text} from 'react-native';

const mapStateToProps = ({ authReducer }) => ({
     auth: authReducer
});

class Login extends  React.Component {
    componentDidMount(): void {
        console.log(this.props)
    }

    render() {
        return (
            <View>
                <Text>login screen</Text>
            </View>
        );
    }
}

export  default connect(mapStateToProps) (Login);
