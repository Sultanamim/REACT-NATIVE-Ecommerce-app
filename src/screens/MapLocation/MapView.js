import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  PermissionsAndroid,
  TouchableOpacity,
  Animated
} from "react-native";
import { Marker, Polygon } from "react-native-maps";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import TopGradientImg from "../../assets/gradiant-top.png";
import BottomGradientImg from "../../assets/gradiant-bottom.png";
import RadiusImg from "../../assets/radius-location.png";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../utils";
import Geolocation from "react-native-geolocation-service";
import DrawImg from "../../assets/location.png";
import React, { useRef, useCallback, useEffect, useMemo, useState } from 'react';
import MapViewGestures from '@dev-event/react-native-maps-draw';

// Create AnimatedPolygon as a regular function since Animated.createAnimatedComponent is React Native specific.
const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);

const MapViewComponent = () => {
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const mapRef = useRef(null);;


  const initialPolygon = useRef({
    polygons: [],
    distance: 0,
    lastLatLng: undefined,
    initialLatLng: undefined,
    centerLatLng: undefined,
  });

  const [isActiveDraw, setDrawMode] = useState(false);
  const [polygon, setPolygon] = useState(initialPolygon.current);
  const [isReady, setIsReady] = useState(false);
  const [points, setPoints] = useState([3]);

  const handleMapReady = useCallback(
    () => mapRef.current && setIsReady(true),
    []
  );

  const convertByPoint = async (item) =>
  await mapRef.current?.coordinateForPoint(item);

  const handleRemovePolygon = () => setPolygon(initialPolygon.current);

  const handleCanvasEndDraw = useCallback((locations) => {
    setPolygon(locations);
    setDrawMode(false);
  }, []);

  const handlePolygon = useCallback(
    (_, index) => (
      <AnimatedPolygon
        key={index}
        coordinates={polygon.polygons}
        fillColor="rgba(255, 171, 171, 0.01)"
        strokeColor="rgba(255, 171, 171, 0.88)"
        strokeWidth={1}
      />
    ),
    [polygon.polygons]
  );
  const isVisiblePolygons = useMemo(
    () => isReady && polygon.polygons && polygon.polygons.length > 0,
    [isReady, polygon.polygons]
  );


  return (
    <SafeAreaView style={styles.container}>
        
        <MapView ref={mapRef} style={styles.map} onMapReady={handleMapReady}>
        {isVisiblePolygons && (
          <>
            {polygon.centerLatLng && (
              <Marker
                onPress={handleRemovePolygon}
                coordinate={polygon.centerLatLng}
              >
                <View style={styles.card}>
                  <Image
                    source={require('../../assets/location.png')}
                    resizeMode={'stretch'}
                    style={styles.img}
                  />
                </View>
              </Marker>
            )}
            {polygon.polygons.map(handlePolygon)}
          </>
        )}
      </MapView>

      {isActiveDraw && (
        <MapViewGestures
          points={points}
          widthLine={3}
          colorLine={'green'}
          onEndDraw={handleCanvasEndDraw}
          onChangePoints={setPoints}
          backgroundCanvas={'rgba(0, 0, 0, 0.0)'}
          convertByPoint={convertByPoint}
        />
      )}

      <View style={styles.panel}>
        <Text style={styles.title}>Menu</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* <MenuCard
            enabled={isActiveDraw}
            title={'Draw Area'}
            onTap={() => {
              setPolygon(initialPolygon.current);
              setPoints([]);
              setDrawMode(true);
            }}
          /> */}
        </View>
      </View>


      {/* <Image source={TopGradientImg} style={styles.topGradiant} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={tokyoRegion}
      >
      </MapView>
      <Image source={BottomGradientImg} style={styles.bottomGradiant} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // map: {
  //   ...StyleSheet.absoluteFillObject,
  //   flex: 1,
  //   width: 430,
  //   height: 600.424,
  //   top: 137.72,
  //   left: 0,
  //   right: 0,
  //   bottom: 62.86,
  //   position: "absolute",
  //   zIndex: 0,
  // },
  topGradiant: {
    width: 430,
    height: 37,
    top: 113,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 2,
  },
  bottomGradiant: {
    width: 430,
    height: 63,
    top: 705,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 2,
  },

  panel: {
    flexDirection: 'column',
    bottom: '0%',
    width: '100%',
    height: '20%',
    backgroundColor: 'white',
    position: 'absolute',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  title: {
    color: '#241f1f',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center',
  },
  img: {
    height: 18,
    width: 18,
    tintColor: 'white',
  },
  map: {
    flex: 1,
  },

  card: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: 'orange',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

});

export default MapViewComponent;
