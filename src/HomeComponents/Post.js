import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SCREEN_WIDTH } from '../screens/Dimentions';
import { Entypo, AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { useState } from 'react';
const Post = ({
  username,
  likesCount,
  postDescription,
  totalComments,
  time,
}) => {
  const [liked, setLiked] = useState(false)
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.userDetails}>
          <View style={{ ...styles.userdp, marginHorizontal: 15 }}>

          </View>
          <View>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black'
            }}>
              {username}
            </Text>
          </View>
        </View>
        <Entypo
          name="dots-three-vertical"
          style={{ marginRight: 10 }}
          size={25}
          color="black" />
      </View>
      <View style={styles.post}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={require('../assets/icons/facebook.png')}
        />
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <View style={styles.postActions}>
          <View style={styles.recations}>
            <TouchableWithoutFeedback onPress={() => setLiked(!liked)}>
              <AntDesign
                name={liked ? 'heart' : 'hearto'}
                size={30}
                color="black"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback >
              <Ionicons
                name="chatbubble-outline"
                style={{ transform: [{ rotateY: '180deg' }], marginHorizontal: 10 }}
                size={30}
                color="black" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback >
              <Ionicons
                name="ios-paper-plane-outline"
                size={30}
                color="black" />
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback >
            <Feather
              name="bookmark"
              size={30}
              color="black" />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.likesCount}>
          <Text style={{ fontWeight: 'bold' }}>{likesCount} likes</Text>
        </View>
        <View style={styles.postDescription}>
          <Text>
            <TouchableWithoutFeedback>
              <Text style={{ fontWeight: 'bold' }}>{username} </Text>
            </TouchableWithoutFeedback>
            <Text>
              {postDescription}
            </Text>
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.viewComments}>
            <Text>View all {totalComments} comments</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.addComment}>
          <View style={styles.userdp}>

          </View>
          <Text style={styles.commentText}>Add a comment...</Text>
        </View>
        <View style={styles.timeView}>
          <Text>{time} minutes ago</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    width: SCREEN_WIDTH,
    paddingBottom: 10
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#C5C5C5',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3
  },
  userdp: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: "black"
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
    width: '50%',
    paddingVertical: 5
  },
  recations: {
    flexDirection: 'row',
    alignItems: "center"
  },
  postActions: {
    flexDirection: 'row',
    alignItems: "center",
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  likesCount: {
    paddingVertical: 5,
  },
  viewComments: {
    opacity: 0.5,
    paddingVertical: 5
  },
  timeView: {
    opacity: 0.5
  },
  addComment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    marginHorizontal: 10,
    opacity: 0.5,
    fontSize: 18
  },
  post: {
    width: SCREEN_WIDTH,
    height: 400
  }
});
