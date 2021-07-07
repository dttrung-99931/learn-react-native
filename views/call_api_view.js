import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const CallApiView = (props): Node => {
  const [covdiResponse, setCovidResponse] = React.useState('');
  const [isLoading, setLoading] = React.useState(true);
  const covidApiUrl =
    'https://api.apify.com/v2/acts/ApTdlzhdXcdQM2lgc/runs/last/dataset/items?token=jdbbdndaueMADvtGN2m3NXic9';

  React.useEffect(async () => {
    try {
      let response = await fetch(covidApiUrl);
      let responseJson = await response.json();
      setCovidResponse(JSON.stringify(responseJson));
    } catch (error) {
      setCovidResponse(`error ${error}`);
    }
    setLoading(false);
  }, []);

  const renderLoading = () => {
    if (!isLoading) return null;
    return <ActivityIndicator color="black" style={styles.container} />;
  };

  return (
    <View style={styles.container}>
      {renderLoading()}
      <ScrollView style={styles.absolute}>
        <Text style={styles.padding16}>{covdiResponse}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.floatingActionBtn}>
        <Text style={styles.floatingActionBtnText}>API</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CallApiView;

const styles = StyleSheet.create({
  padding16: {
    padding: 16,
  },
  floatingActionBtnText: {
    color: 'white',
    fontSize: 14,
  },
  floatingActionBtn: {
    width: 48,
    height: 48,
    backgroundColor: 'purple',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 24,
    right: 24,
    elevation: 8,
  },
  absolute: {
    position: 'absolute',
  },
  container: {
    flex: 1,
  },
});
