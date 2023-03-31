import firestore from '@react-native-firebase/firestore';
import { Collections } from '../../shared/constent';
const getSongList = async () => {
  try {
    const songInfo = await firestore().collection(Collections.SongList).get();
    const songs = songInfo._docs;
    const list = songs.map(ele => ele._data);
    return list;
  } catch (err) {
    console.log(err);
  }
};
export const songStore = await getSongList();
