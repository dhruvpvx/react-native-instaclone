import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {SCREEN_WIDTH} from '../../screens/Dimentions';

const data = [
  {
    id: 1,
    username: 'test1'
  },
  {
    id: 2,
    username: 'test2'
  },
  {
    id: 3,
    username: 'test3'
  },
  {
    id: 4,
    username: 'test4'
  },
  {
    id: 5,
    username: 'test5'
  },
  {
    id: 6,
    username: 'test6'
  },
  {
    id: 7,
    username: 'test7'
  },
]

const Stories = () => {
  return (
    <View style={styles.storiesContainer}>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable>
              <View style={styles.storyContainer}>
                <View style={styles.storyView}>
                  {/* <LinearGradient
                    colors={['#405de6', '#5851db', '#833ab4', '#c13584', '#e1306c', '#fd1d1d']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.grediant}
                  > */}
                    <View style={styles.view}>

                    </View>
                  {/* </LinearGradient> */}
                </View>
                <Text>{item.username}</Text>
              </View>
            </Pressable>
          )
        }}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storiesContainer: {
    width: SCREEN_WIDTH,
    paddingVertical: 5,
  },
  storyView: {
    height: 65,
    width: 65,
    borderRadius: 60,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'orange'
  },
  storyContainer: {
    alignItems: 'center',
    margin: 1
  },
  grediant: {
    height: '100%',
    width: '100%',
    borderRadius: 60
  },
  view: {
    width: '95%',
    height: '95%',
    borderRadius: 60,
    backgroundColor: 'lightpink'
  }
});
