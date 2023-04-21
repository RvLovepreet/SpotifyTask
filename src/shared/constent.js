import FontIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const constent = {
  SignUp: 'Sign Up',
  SignIn: 'Sign In',
  LogOut: 'Log Out',
  SongList: 'Latest Song',
  Name: 'Name',
  Email: 'Email',
  Password: 'Password',
  MobileNo: 'Mobile No.',
  moblie: 'Mobile',
  ConfirmPassword: 'Confirm Password',
  Gender: 'Gender',
  AlreadyUser: 'Already have an Account?',
  InvalidUser: 'Check Your Email and Password',
  UnableCreateUser: 'Your Unable to Create user!',
  WrongEmailAndPassword:
    'check mobile no , email and create strong password using combination of minimum 8 characters using number, upper case , lower case, number and symbols',
  RequiredFeild: 'Please Fill required fileds',
  AccountCreated: 'Account Created',
  psw: 'password',
  email: 'email',
  mob: 'mobile',
  createStrongPassword: 'create Strong Password',
  invalidEmail: 'Please enter the valid email',
  invalidMobile: 'Please enter the valid mobile phone',
  CreateNewPlayList: 'Create New Playlist',
  NewPlayListName: 'PlayList Name',
  FavouriteSong: 'FavSong',
  History: 'History',
};
export const Collections = {
  Users: 'users',
  SongList: 'songList',
};

export const Icons = {
  Back: <FontAwesomeIcon name="step-backward" size={30} color="#fff" />,
  /*   Back: <IoniconsIcon name="ios-arrow-back-sharp" size={30} color="#fff" />, */
  Close: <FontAwesomeIcon name="close" size={30} color="#111" />,
  FilledHeart: <IoniconsIcon name="heart" size={30} color="#111" />,
  Add: <IoniconsIcon name="add" size={30} color="#111" />,
  History: <FontAwesomeIcon name="history" size={30} color="#fff" />,
  Pause: <IoniconsIcon name="pause-outline" size={30} color="#111" />,
  PasswordEye: <MaterialCommunityIcons name="eye" size={30} color="#111" />,
  PasswordEyeClose: (
    <MaterialCommunityIcons name="eye-off" size={30} color="#111" />
  ),
  Dollar: <FontAwesomeIcon name="dollar" size={18} color="#2960d6" />,
};
export const navigationScreen = {
  SignUpScreen: 'SignUp',
  SignInScreen: 'SignIn',
  ProfileSongScreen: 'ProfileSongScreen',
  SongsNavigation: 'SongsNavigation',
  PlayListScreen: 'SongListScreen',
  Songs: 'Songs',
  MyFav: 'My Favourite',
  PlayList: 'Play List',
  History: 'History',
  PremiumSongs: 'Premium',
  CreatePlayListScreen: 'CreatePlayListScreen',
  PlayListSongScreen: 'PlayListSongScreen',
};
export const fontSize = {};

export const ImageSource = {
  SongImg1: require('./images/SongImage1.jpg'),
};
export const color = {
  firstColor: '#2960d6',
};
export const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
export const mobregex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
export const passwordregex =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
