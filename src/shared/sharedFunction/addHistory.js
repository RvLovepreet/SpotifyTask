import firestore from '@react-native-firebase/firestore';
import TrackPlayer from 'react-native-track-player';
export const playSong = async (user, email, title, index) => {
  await TrackPlayer.skip(index);
  await TrackPlayer.play();
  addinHistory(user, email, title);
};
export const addinHistory = async (users, email, title) => {
  console.log(users, email, title, 'history method 222');

  try {
    const data = await firestore().collection(users).doc(email).get();
    /* .update({
          history: firestore.FieldValue.arrayUnion(title),
        }); */
    const historyList = data._data.history;
    console.log(historyList);
    const newHistory = historyList.reverse();
    console.log(newHistory);
    if (newHistory[0] !== title) {
      newHistory.unshift(title);
      console.log(newHistory);
      await firestore().collection(users).doc(email).update({
        history: newHistory,
      });
    }
    console.log('history added');
  } catch (err) {
    console.log(err);
  }
};
