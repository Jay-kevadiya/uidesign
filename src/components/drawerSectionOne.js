import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default DrawerSectionOne = () => {
    return(
        <View style={styles.firstContainer}>

                    {/* Image */}
                    <View style={styles.ImageWrapper}>
                        <View style={styles.imagecontainer}>
                            <Image style={styles.imagetag} source={require('../assets/image/profile.jpeg')} />
                        </View>

                        {/* email */}
                        <View style={styles.textWrapper}>
                            <Text style={styles.textstyle1}>Andrew R. Whitesides</Text>
                            <Text style={styles.textstyle2}>andrew@gmail.com</Text>
                        </View>
                    </View>
                </View>
    )
};

const styles = StyleSheet.create({
    firstContainer: {
        backgroundColor: 'rgb(227,233,236)',
        height: 180,
        borderTopWidth: 1,
        borderTopColor: 'rgb(223,229,231)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(223,229,231)',
        paddingHorizontal: 5
    },
    ImageWrapper: {
        margin: 10
    },
    imagecontainer: {
        marginTop: 10,
    },
    imagetag: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    textWrapper: {
        marginTop: 20,
    },
    textstyle1: {
        fontFamily: 'Rubik-Bold',
        fontSize: 18,
        color: 'rgb(16,152,167)'
    },
    textstyle2: {
        marginTop: 5,
        fontFamily: 'Rubik-light',
        color: 'rgb(16,152,167)',
        fontSize: 15
    }
});