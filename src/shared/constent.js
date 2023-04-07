import FontIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
export const constent = {
  SignUp: 'Sign Up',
  SignIn: 'Sign In',
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
};
export const Collections = {
  Users: 'users',
  SongList: 'songList',
};

export const Icons = {
  Back: <IoniconsIcon name="ios-arrow-back-sharp" size={30} color="#fff" />,
  Close: <IoniconsIcon name="ios-close" size={30} color="#fff" />,
  FilledHeart: <IoniconsIcon name="heart" size={30} color="#fff" />,
  Add: <IoniconsIcon name="add" size={30} color="#fff" />,
};
export const navigationScreen = {
  SignUpScreen: 'SignUp',
  SignInScreen: 'SignIn',
  ProfileSongScreen: 'ProfileSongScreen',
  SongsNavigation: 'SongsNavigation',
  PlayListScreen: 'SongListScreen',
  CreatePlayListScreen: 'CreatePlayListScreen',
  PlayListSongScreen: 'PlayListSongScreen',
};
export const fontSize = {};

export const ImageSource = {
  SongImg1: require('./images/SongImage1.jpg'),
};

export const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
export const mobregex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
export const passwordregex =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
