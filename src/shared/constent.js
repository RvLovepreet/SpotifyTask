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
};
export const Collections = {
  Users: 'users',
  SongList: 'songList',
};

export const navigationScreen = {
  SignUpScreen: 'SignUp',
  SignInScreen: 'SignIn',
  ProfileSongScreen: 'ProfileSongScreen',
  SongsNavigation: 'SongsNavigation',
  PlayListScreen: 'SongListScreen',
  CreatePlayListScreen: 'CreatePlayListScreen',
};
export const fontSize = {};

export const ImageSource = {
  SongImg1: require('./images/SongImage1.jpg'),
};

export const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
export const mobregex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
export const passwordregex =
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
