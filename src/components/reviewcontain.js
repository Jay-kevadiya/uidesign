import React from 'react';
import { View, StyleSheet, Text, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ReviewData} from '../common/reviews';

export default ReviewContain = (props) => {

    

    const renderReview = (item) => {
        return(
            <View style={styles.reviewWrapper} >
                    <View style={styles.imageWrapper}>
                        <View style={styles.imageview}>
                            <Image style={styles.imageStyle} source={require('../assets/image/profile.jpeg')} />
                            <View style={styles.textWrapper}>
                                <Text style={styles.textview}>Maria R. Garza </Text>
                                <View style={styles.dateWrapper}>
                                    <Text style={{ color: 'rgb(37,94,113)' }}>2020-06-14</Text>
                                    <Text style={{ marginLeft: 5, color: 'rgb(37,94,113)' }}>10:37</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.productRating}>
                            <Text style={styles.pText}>4.3</Text>
                         <Icon name="star" size={20} color="gold" style={{ marginLeft: 5 }} />
                        </View>
                    </View>

                    <View style={styles.contentWrapper}>
                        <Text style={styles.contextText}>
                        I can't y'all how much I LOVE THIS DRESS. I wrote it to a banquet at which i did the keynote speetch. Such a beautiful dress. The scuba material hides all the imperfections that other materials tend to show
                        </Text>
                    </View>

                </View>
        )
    };

    return(
        <View style={styles.reviewContainer}>

                    <FlatList
                        data={ReviewData}
                        keyExtractor={item => item.id}
                        renderItem={renderReview}
                    />

            </View>
    )
};

const styles = StyleSheet.create({
    reviewContainer: {
        backgroundColor:'white',
        marginVertical:20

    },
    reviewWrapper: {
        paddingHorizontal: 10,
        paddingVertical:10
    },
    imageWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    imageview: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageStyle: {
        height: 70,
        width: 70,
        borderRadius: 60
    },
    textWrapper: {
        paddingHorizontal: 10
    },
    textview: {
        color: 'rgb(37,94,113)',
        fontFamily: 'Roboto-Bold',
        fontSize: 20
    },
    dateWrapper: {
        flexDirection: 'row',
    },
    productRating: {
        backgroundColor: 'rgb(37,94,113)',
        height: 40,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    pText: {
        color: 'white',
        marginLeft: 15,
        fontSize: 16
    },
});
