import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bigContainer}>
      <View style={styles.container}>
        {/* <TouchableOpacity
          style={styles.topContainer}
          onPress={() => navigation.navigate('Setting')}>
          <Text style={styles.headerText}>setting</Text>
        </TouchableOpacity> */}

        <View style={styles.insideContainer}>
          <Text style={styles.topText}>시각장애인용</Text>
          <Text style={styles.baseText}>QR코드</Text>
          <Text style={styles.baseText}>음성 안내 서비스</Text>
          <Text style={styles.smallText}>Ver 1.0</Text>

          <Text style={styles.bottomText}>(주) 아이쉐어넷</Text>
          <Text style={styles.bottomText}>www.eyesharenet.org</Text>
          <Text style={styles.bottomText}>서비스 문의</Text>
          <Text style={styles.bottomText}>064)-725-2046</Text>
        </View>
        <View style={styles.startBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('QRscanner')}
            style={styles.button}>
            <Text style={styles.startText}>START</Text>
          </TouchableOpacity>
        </View>
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
  },
  container: {backgroundColor: 'cornflowerblue', flex: 1},
  topContainer: {
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'darkblue',
    alignContent: 'center',
    alignItems: 'center',
  },
  headerText: {color: 'darkblue', fontSize: 30, padding: 5},
  insideContainer: {
    marginTop: 60,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'darkblue',
    margin: 10,
    padding: 10,
    backgroundColor: 'darkslateblue',
  },
  topText: {
    fontSize: 35,
    alignSelf: 'center',
    padding: 10,
    marginTop: 30,
    color: '#fff',
  },
  baseText: {
    fontSize: 35,
    alignSelf: 'center',
    padding: 10,
    color: '#fff',
  },
  smallText: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 90,
    color: '#fff',
  },
  bottomText: {
    fontSize: 16,
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
    color: '#fff',
  },
  startBox: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'darkblue',
    backgroundColor: 'cornflowerblue',
  },
  startText: {fontSize: 30, color: 'darkblue', fontWeight: 'bold'},
  button: {padding: 10, alignContent: 'center', alignItems: 'center'},
});

export default Home;
