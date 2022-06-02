import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Tts from 'react-native-tts';
import SafeAreaView from 'react-native-safe-area-view';

const QRscanner = ({navigation, route}) => {
  // 비동기 처리를 위한 QR 초기 값 설정 & 값 초기화
  const [QRcode, setQRcode] = useState(null);
  // 동일한 QR 중복 음성 출력 방지를 위한 임시 저장소
  const [tmp, setTmp] = useState(null);
  // 음성출력 on/off를 위한 상태관리
  const [tts, setTts] = useState('On');

  // 음성출력 기능 on/off
  const OnOffTts = () => {
    if (tts == 'On') {
      setTts('Off');
    } else {
      setTts('On');
    }
  };

  // QR 입력값이 초기값이 아니고 타입이 QR code일 떄
  if (QRcode != null && QRcode.type == 'QR_CODE') {
    // 입력값이 중복이 아니고, 특정 값으로 시작하며, 음성출력 기능이 on 일 때
    if (
      tmp != QRcode.data &&
      QRcode.data.startsWith('eyesharenet') &&
      tts == 'On'
    ) {
      // 진행중이던 음성출력을 멈추고 새로운 입력값 음성출력
      Tts.stop();
      Tts.speak(QRcode.data);
    }
    // 임시저장소에 현재 음성출력중인 입력값 저장하고 초기값 null 설정
    setTmp(QRcode.data);
    setQRcode(null);
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

      <RNCamera style={styles.rnCamera} onBarCodeRead={setQRcode} />

      <View style={styles.cameraControl}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
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
