import React, { useEffect, useContext, useState } from "react";
import {StyleSheet, SafeAreaView } from "react-native";

import Layout from '../components/Layout/Layout';
import Points from '../components/Points/Points';
import Search from '../components/Search/Search';
import Map from '../components/Map/Map';

import { Context } from '../context/PointsContext';  

const StoreFinderScreen = props => {
    const { state, getPoints } = useContext(Context);
    const [stores, setStores] = useState([]);
  
    const searchStores = (search) => {
        getPoints(search);
    }

    useEffect(() => {
        const stores = state.map(store => {
          return {
            latitude: Number(store.coordinates.latitude),
            longitude: Number(store.coordinates.longitude),
            name: store.name,
            imageurl: store.image_url,
            address1: store.location.address1,
            address2: store.location.address2,
            id: store.id
          }
        }, [state]);
    
        setStores(stores);
    
    }, [state])

    return <Layout navigation={props.navigation}>
                <Search search={searchStores} placeholder="Search for a supermarket, e.g tesco" />
                <Map  stores={stores} />
                <Points points={stores} />
              </Layout>
};

const styles = StyleSheet.create({
    text: {
        padding: 30
    }
})

export default StoreFinderScreen;