import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const COLORS = {
  background: '#FFFFFF',
  boderColor: 'rgba(0, 0, 0, 0.25)',
  buttoncolor: 'rgba(255, 120, 22, 1)',
  textcolor: 'rgba(0, 0, 0, 0.6)',
  headingcolor: '#030303',
  buttondisable: '#004869',
  textcolordisble: 'rgba(125, 125, 125, 1)',
  errorbutton: '#D92427',
};

export const SIZES = {
  // spacing
  padding: 10,
  py: 10,
  px: 10,
  my: 10,
  mx: 10,

  // font size
  h1: 18,
  h2: 16,
  h3: 14,
  h4: 12,
  heading: 10,
};

export const ICONS = {
  backicon: require('../authimage/Arrowback.png'),
  date: require('../authimage/Group.png'),
  arrow: require('../authimage/Vectorarrow.png'),
  pen: require('../authimage/pen.png'),
  phone: require('../accountprofile/phonenumber.png'),
  email: require('../accountprofile/email.png'),
  earth: require('../accountprofile/earth-grid.png'),
  calender: require('../accountprofile/calender.png'),
  female: require('../accountprofile/female.png'),
  document: require('../homeimage/document.png'),
  menu: require('../homeimage/menu.png'),
  search: require('../homeimage/serach.png'),
  documentfolder: require('../homeimage/folder.png'),
  threicon: require('../homeimage/threeicon.png'),
  cale: require('../homeimage/cale.png'),
  person: require('../homeimage/Group2.png'),
  clound: require('../homeimage/cloud.png'),
  play: require('../homeimage/play.png'),
  delete: require('../homeimage/delete.png'),
  cross: require('../homeimage/Cross.png'),
};

export const IMAGES = {
  backgroundimage: require('../authimage/Onboarding.png'),
  handimgsplash: require('../authimage/handimage.png'),
  logoimage: require('../authimage/indiBaba1xLogo.png'),
  profile: require('../authimage/Frame.png'),
  account: require('../menu/person.png'),
  compines: require('../menu/Compines.png'),
  card: require('../menu/card.png'),
  payment: require('../menu/Grouppayment.png'),
  logout: require('../menu/logout.png'),
  privacy: require('../menu/policy.png'),
  terms: require('../menu/terms.png'),
  help: require('../menu/Group171.png'),
  sctok: require('../menu/sctok.png'),
  BBcrop: require('../homeimage/BBCorp.png'),
  Bizvisor: require('../homeimage/Bizvisor.png'),
  newimage:require("../menu/Rectangle.png"),
  frameimage:require("../menu/frame.png")
};

const appTheme = {COLORS, SIZES, ICONS, IMAGES};
export default appTheme;
