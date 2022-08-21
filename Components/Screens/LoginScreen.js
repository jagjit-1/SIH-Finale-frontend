import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from '../Assets/CustomButton';
import { AuthContext } from '../../AuthProvider';

const LoginScreen = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    return (
        <View>
            <CustomButton onPress={() => setIsLoggedIn(!isLoggedIn)} title="next" />
        </View>
    )
}

export default LoginScreen