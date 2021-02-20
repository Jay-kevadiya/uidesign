import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Search from '../components/search';


export default HomeHeader = (props) => {
    // const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <View style={styles.iconWrapper}>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()} >
                        <Image style={styles.menuImage} source={require('../assets/icon/menuLeft.png')} />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>{props.name}</Text>
                </View>

                <View style={styles.cartWrapper}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
                        <Image style={styles.cartImage} source={require('../assets/icon/trolley.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.chatImage} source={require('../assets/icon/chat.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical:5

    },
    iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconText: {
        marginLeft: 20,
        color: "rgb(14,87,97)",
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
    },
    menuImage: {
        height: 25,
        width: 30
    },
    cartWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartImage: {
        height: 30,
        width: 30,
        marginRight:20
    },
    chatImage:{
        height: 30,
        width: 35,
    },
    
});