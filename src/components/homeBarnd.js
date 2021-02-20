import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Detail from '../components/detail';

export default HomeBrand = (props) => {
    const {test} = props;
    return(
        <View style={styles.container}>

            <View style={styles.descWrapper}>
                <Icon style={styles.descIcon}name="documents-outline" size={30} color="black"/>
                <Text style={styles.descText}>{test.brand}</Text>
            </View>

            <View style={styles.imageWrapper}>
                <Image style={{borderRadius:10}}source={require('../assets/image/horizontal.jpeg')}/>
            </View>

            <Detail/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10
    },
    descWrapper:{
        paddingHorizontal:10,
        marginTop:0,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgb(234,234,234)'
    },
    descIcon:{
        paddingVertical: 20
    },  
    descText:{
        color:'rgb(67,94,103)',
        fontFamily:'Roboto-Bold',
        fontSize:20,
        marginLeft: 20,
        paddingVertical:20

    },
    imageWrapper:{
        alignSelf:'center',
    }
});