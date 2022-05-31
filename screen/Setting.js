import React, {useState} from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const Setting = ({navigation}) => {
  const [tts, setTts] = useState('On');

  const OnOffTts = () => {
    if (tts == 'On') {
      setTts('Off');
    } else {
      setTts('On');
    }
  };
  return (
    <SafeAreaView style={styles.bigContainer}>
      <View style={styles.container}>
        <View style={styles.midBox}>
          <View style={styles.rowBox}>
            <View style={styles.ttsBox}>
              <Text style={styles.headerText}>Text Reading</Text>
            </View>

            <TouchableOpacity style={styles.ttsBox} onPress={() => OnOffTts()}>
              <Text style={styles.headerText}>{tts}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowBox}>
            <View style={styles.ttsBox}>
              <Text style={styles.headerText}>Update</Text>
            </View>

            <View style={styles.ttsBox}>
              <Text style={styles.headerText}>Ver 1.0</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cameraControl}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('QRscanner', {onoff: tts})}>
          <Text style={styles.btnText}>END</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'darkblue',
    borderRadius: 10,
    backgroundColor: 'cornflowerblue',
  },
  container: {
    paddingVertical: 30,
    flex: 1,
    backgroundColor: 'cornflowerblue',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  midBox: {
    flexDirection: 'column',
  },

  rowBox: {
    flexDirection: 'row',
  },
  ttsBox: {
    height: 60,
    width: 170,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'darkblue',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  headerText: {color: 'darkblue', fontSize: 20, padding: 5, fontWeight: 'bold'},
  cameraControl: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'darkblue',
    borderRadius: 10,
    backgroundColor: 'cornflowerblue',
  },
  btn: {
    padding: 20,
    width: 240,
    borderRadius: 4,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginVertical: 8,
  },
  btnText: {
    fontSize: 30,
    color: 'darkblue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Setting;
