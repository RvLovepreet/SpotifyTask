import firestore from '@react-native-firebase/firestore';
import TrackPlayer, { State } from 'react-native-track-player';
export const playSong = async (user, email, title, index) => {
  const currentIndex = await TrackPlayer.getCurrentTrack();

  const state = await TrackPlayer.getState();
  if (state === State.Playing && currentIndex === index) {
    await TrackPlayer.pause();
  } else {
    await TrackPlayer.skip(index);
    await TrackPlayer.play();
    addinHistory(user, email, title);
  }
};
export const addinHistory = async (users, email, title) => {
  /* console.log(users, email, title, 'history method 222'); */
  try {
    const data = await firestore().collection(users).doc(email).get();
    const historyList = data._data.history;
    const newHistory = historyList.reverse();
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
