import firestore from '@react-native-firebase/firestore';
import TrackPlayer from 'react-native-track-player';
import { constent, Collections } from '../constent';

export const getFilterSongs = async (userEmail, songs, operation, title) => {
  console.log(operation);
  try {
    const user = await firestore()
      .collection(Collections.Users)
      .doc(userEmail)
      .get();
    const history =
      operation === constent.History
        ? user._data.history
        : operation == constent.FavouriteSong
        ? user._data.favSong
        : user._data.playList[title];

    const result = history.map(Song => songs.filter(ele => ele.title == Song));
    const newList = [];
    result.forEach(ele => newList.push(ele[0]));
    await TrackPlayer.reset();
    await TrackPlayer.add(newList);

    return newList;
  } catch (err) {
    console.log(err);
  }
};
