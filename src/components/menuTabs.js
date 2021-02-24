import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default MenuTabs = (props) => {
    const [productType, SetProductType] = useState(0);

    const viewItems = () => {
        if (productType === 0) {
            return props.Tag1

        } else if (productType === 1) {
            return props.Tag2
        } else if (productType === 2) {
            return props.Tag3
        }
    };

    return (

        <View style={styles.container}>
            {/* list */}
            <View style={styles.listWrapper}>
                <View style={styles.productWrapper}>
                    <TouchableOpacity onPress={() => SetProductType(0)}>
                        <Text style={[styles.textStyle, { backgroundColor: productType === 0 ? '#009DB0' : '#fff', color: productType === 0 ? '#fff' : '#009DB0', borderColor: '#009DB0', borderWidth: 1 }]}>{props.title1}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.detailsWrapper}>
                    <TouchableOpacity onPress={() => SetProductType(1)}>
                        <Text style={[styles.textStyle, { backgroundColor: productType === 1 ? '#009DB0' : '#fff', color: productType === 1 ? '#fff' : '#009DB0', borderColor: '#009DB0', borderWidth: 1 }]}>{props.title2}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.reviewWrapper}>
                    <TouchableOpacity onPress={() => SetProductType(2)}>
                        <Text style={[styles.textStyle, { backgroundColor: productType === 2 ? '#009DB0' : '#fff', color: productType === 2 ? '#fff' : '#009DB0', borderColor: '#009DB0', borderWidth: 1 }]}>{props.title3}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* <View style={{ height: 50 }}>{viewItems()}</View> */}

            <ScrollView>
                <View style={styles.viewContent}>
                    <View>{viewItems()}</View>
                </View>
            </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

    listWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    textStyle: {
        fontFamily: 'Roboto-Bold',
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 20
    },

});