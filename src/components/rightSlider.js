import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default RightSlider = (props) => {
    
    return (
        // <Modal visible={true}>
        <View style={styles.container}>
            <View style={{ height: '100%', width: '40%', backgroundColor:'rgba(0,0,0,0.5)' }}>

            </View>
            <View style={{ height: '100%', width: '60%' }}>
                <View style={styles.resultWrapper}>
                    <Text style={styles.resultText}>Result</Text>
                    <TouchableOpacity>
                        <Text style={styles.resultText}>Clear</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.resultWrapper}>
                    <Text style={styles.resultText}>Categories</Text>
                    <TouchableOpacity>
                        <Icon name="chevron-down-outline" size={25} color="#009DB0" />
                    </TouchableOpacity>
                </View>

                <View style={styles.resultWrapper}>
                    <Text style={styles.resultText}>Brands</Text>
                    <TouchableOpacity>
                        <Icon name="chevron-down-outline" size={25} color="#009DB0" />
                    </TouchableOpacity>

                </View>

                <View style={styles.resultWrapper}>
                    <Text style={styles.resultText}>Colors</Text>
                    <TouchableOpacity>
                        <Icon name="chevron-down-outline" size={25} color="#009DB0" />
                    </TouchableOpacity>

                </View>

                <View style={styles.resultWrapper}>
                    <Text style={styles.resultText}>Size</Text>
                    <TouchableOpacity>
                        <Icon name="chevron-down-outline" size={25} color="#009DB0" />
                    </TouchableOpacity>

                </View>

                <View style={styles.buttonContiner}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <View style={styles.buttonWrapper}>
                            <Text style={styles.appText}>Apply Filter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        // </Modal>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection: 'row',
        zIndex:1
    },
    resultWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 25,
    },
    resultText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        color: '#009DB0'
    },
    buttonContiner: {
        // flex: 1
    },
    buttonWrapper: {
        backgroundColor: '#009DB0',
        marginTop: 70,
        alignSelf: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20
    },
    appText: {
        fontFamily: 'Roboto-Bold',
        color: '#fff',

    }
});