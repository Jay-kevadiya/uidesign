import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlashList from '../components/flashList';


export default Detail = () => {
    return(
        <View style={styles.container}>

            <View style={styles.descWrapper}>
                <Icon style={styles.descIcon}name="documents-outline" size={30} color="black"/>
                <Text style={styles.descText}>Description</Text>
            </View>

            <View style={styles.contentWrapper}>
                <Text style={styles.contextText}>
                    Calvin Klein is a premier American designer famous for the birth of designer jeans. Known as "the supreme master of minimalism", Calvin Klein is a lifestyle design company known for minimalist and functional aesthetics. The brand is morden, uniquely sophesticated and offers timeless style.
                </Text>
            </View>

            <View style={styles.descWrapper}>
                <Icon style={styles.descIcon}name="documents-outline" size={30} color="black"/>
                <Text style={styles.descText}>Related Products</Text>
            </View>

            <FlashList titlename="Products" lines={2} horizontaltype={false}/>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red',
        paddingHorizontal:5
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
    contentWrapper:{
        padding: 10
    },
contextText:{
    color:'rgb(67,94,103)',
    fontFamily:'Roboto-Medium',
}
});