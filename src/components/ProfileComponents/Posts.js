import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]

const Posts = () => {
  return (
    <View style={{width: '100%', paddingBottom: 240 }}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.post}>
              <Text style={{fontSize: 35, color: 'white'}}>{item}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  post: {
    height: 150,
    width: '33%',
    backgroundColor: 'black',
    margin: 0.4
  }
});
