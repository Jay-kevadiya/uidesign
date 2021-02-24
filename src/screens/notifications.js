import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import NotificationData from '../common/notification';

export default Notifications = () => {

    const renderNotify = ({ item }) => {
        return (
            <View style={styles.notifyContainer}>
                <View style={styles.textWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image source={item.image} style={{ height: 100, width: 70 }} />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.messageText}>{item.message}</Text>
                        <View style={styles.dateWrapper}>
                            <Text style={styles.dateText}>{item.date}</Text>
                            <Text style={styles.dateText}>{item.time}</Text>
                        </View>
                    </View>
                </View>


            </View>
        )
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={NotificationData}
                keyExtractor={item => item.id}
                renderItem={renderNotify}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    notifyContainer: {
        backgroundColor: '#fff',
        marginVertical:5
    },
    textWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    imageWrapper: {

    },
    textContainer: {
        width:'80%',
        padding:10

    },
    messageText: {
        fontFamily: 'Roboto-Bold',
        color: '#009db0',
        fontSize: 16
    },
    dateWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical:10
    },
    dateText:{
        fontFamily:'Roboto-Medium',
        fontSize:15,
        color:'black'
    }
});