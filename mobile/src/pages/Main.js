import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

function Main() {
    return <MapView style={styles.map} />
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
})

export default Main;