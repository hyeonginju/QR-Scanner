import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Tts from 'react-native-tts';
import SafeAreaView from 'react-native-safe-area-view';

const QRscanner = ({navigation, route}) => {
  const [barcode, setBarcode] = useState(null);
  const [tmp, setTmp] = useState(null);
  const [tts, setTts] = useState('On');

  const OnOffTts = () => {
    if (tts == 'On') {
      setTts('Off');
    } else {
      setTts('On');
    }
  };

  if (barcode != null && barcode.type == 'QR_CODE') {
    if (
      tmp != barcode.data &&
      barcode.data.startsWith('eyesharenet') &&
      tts == 'On'
    ) {
      Tts.stop();
      Tts.speak(barcode.data);
    }
    setTmp(barcode.data);
    setBarcode(null);
  }
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.rowBox}>
        <View style={styles.ttsBox}>
          <Text style={styles.headerText}>Text Reading</Text>
        </View>

        <TouchableOpacity style={styles.ttsBox} onPress={() => OnOffTts()}>
          <Text style={styles.headerText}>{tts}</Text>
        </TouchableOpacity>
      </View>

      <RNCamera style={styles.rnCamera} onBarCodeRead={setBarcode} />

      <View style={styles.cameraControl}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Eye Share Net')}>
          <Text style={styles.btnText}>END</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
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
    margin: 20,
  },
  headerText: {color: 'darkblue', fontSize: 20, padding: 5, fontWeight: 'bold'},
  saveArea: {
    backgroundColor: 'skyblue',
  },
  topBar: {
    height: 50,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitleText: {
    color: 'blue',
    fontSize: 20,
  },
  caption: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionTitleText: {
    color: '#121B0D',
    fontSize: 16,
    fontWeight: '600',
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
  rnCamera: {
    flex: 1,
    width: '94%',
    alignSelf: 'center',
  },
  rmCameraResult: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  rmCameraResultText: {
    fontSize: 20,
    color: 'skyblue',
  },
  cameraControl: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'darkblue',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'cornflowerblue',
  },
});

export default QRscanner;
