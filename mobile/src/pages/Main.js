import React, { useState, useEffect} from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);
    useEffect(() => {
        async function loadInicialPosition() {
            const { granted } = await requestPermissionsAsync(); 
            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.3,
                    longitudeDelta: 0.3,
                })
            }
        }

        loadInicialPosition();
    }, []);

    if(!currentRegion) {
        return null;
    }
    return  (
    <MapView initialRegion={currentRegion} style={styles.map} >
        <Marker coordinate ={{ latitude: -23.5941774, longitude: -46.5811725 }} >
            <Image  style={styles.avatar} source={{ uri:  'https://avatars2.githubusercontent.com/u/19143379?s=460&v=4' }} />
            <Callout>
                 <View style={styles.callout}>
                    <Text style={styles.devName}>Matheus Oliveira da Silva</Text>
                    <Text style={styles.devBio}>Hi! I'm a brazilian hobbyist of software! Develop and design softwares is my passion!</Text>
                    <Text style={styles.devTechs}>PHP, JAVASCRIPT</Text>
                 </View>
            </Callout>
        </Marker>
    </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff',
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    }

})

export default Main;