import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ReviewContain from '../components/reviewcontain';


export default Review = (props) => {

    return (
        <View style={styles.container}>

            <View style={styles.descWrapper}>
                <Icon style={styles.descIcon} name="documents-outline" size={30} color="black" />
                <Text style={styles.descText}>Product Reviews</Text>
            </View>

            <ReviewContain  {...props} />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red',
        paddingHorizontal: 5
    },
    descWrapper: {
        paddingHorizontal: 10,
        marginTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(234,234,234)'
    },
    descIcon: {
        paddingVertical: 20
    },
    descText: {
        color: 'rgb(67,94,103)',
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        marginLeft: 20,
        paddingVertical: 20

    },
    reviewspace:{
        marginVertical:15

    }
});