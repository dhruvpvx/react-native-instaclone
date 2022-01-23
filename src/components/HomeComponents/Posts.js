import { LoremIpsum } from 'lorem-ipsum';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Post from './Post';
import Stories from './Stories';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const data = [
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
  {
    id: Math.floor(Math.random() * 9999),
    username: `User${Math.floor(Math.random() * 999)}`,
    likesCount: Math.floor(Math.random() * 999),
    postDescription: lorem.generateSentences(Math.floor(Math.random() * 9)),
    totalComments: Math.floor(Math.random() * 99),
    time: Math.floor(Math.random() * 10)
  },
]

const Posts = () => {
  return (
    <View style={{ paddingBottom: 60 }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          if (index == 0) { return <Stories /> }
          return (
            <Post
              username={item.username}
              likesCount={item.likesCount}
              postDescription={item.postDescription}
              totalComments={item.totalComments}
              time={item.time}
            />
          )
        }}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
