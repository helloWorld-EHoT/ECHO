export interface IRandomUserAPI {
  info?: IRandomUserInfo;
  results: IRandomUserResult[];
}

export interface IRandomUserInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface IRandomUserResult {
  cell: string;
  dob: IRandomDate;
  email: string;
  gender: 'male' | 'female';
  id?: IRandomId;
  location: IRandomLocation;
  login: IRandomLogin;
  name: IRandomName;
  nat?: 'AU' | 'BR' | 'CA' | 'CH' | 'DE' | 'DK' | 'ES' | 'FI' | 'FR' | 'GB' | 'IE' | 'IR' | 'NO' | 'NL' | 'NZ' | 'TR' | 'US';
  phone: string;
  picture?: IRandomUserPic;
  registered: IRandomRegistered;
  // Toggle checkpoint
  collapsed?: boolean;
}

export interface IRandomDate {
  date: string;
  age?: number
}

export interface IRandomId {
  name: string;
  value: any;
}

export interface IRandomLocation {
  city: string;
  coordinates?: {latitude: string, longitude: string};
  postcode: number;
  state: string;
  street: string;
  timezone?: any;
}

export interface IRandomLogin {
  md5?: string;
  password?: string;
  salt?: string;
  sha1?: string;
  sha256?: string;
  username: string;
  uuid?: string;
}

export interface IRandomName {
  title?: string;
  first: string;
  last: string;
}

export interface IRandomUserPic {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IRandomRegistered {
  date: string;
  age?: number;
}

// cell: "(069)-753-1468"
// collapsed: false
// dob:
//   age: 47
// date: "1971-01-21T08:22:24Z"
// __proto__: Object
// email: "john.ramirez@example.com"
// gender: "male"
// id: {name: "SSN", value: "907-86-4898"}
// location:
//    city: "warren"
//    coordinates: {latitude: "-73.6425", longitude: "-9.7414"}
//    postcode: 22575
//    state: "arizona"
//    street: "4392 nowlin rd"
//    timezone: {offset: "-6:00", description: "Central Time (US & Canada), Mexico City"}
// __proto__: Object
// login:
//   md5: "fa1787d47e6e54be7bf5012588fc2136"
// password: "northern"
// salt: "jVYxZC4a"
// sha1: "91d0bf079cd00692c69f6eaf3dc09ae6d3245ae6"
// sha256: "c697462cf64bab8782eebcb4dd9e894903eb80b9f78fa60f826bfaa62efa6ec1"
// username: "redduck117"
// uuid: "8b378f02-2cd6-4d7e-8ab3-07ad272b6ecb"
// __proto__: Object
// name: {title: "mr", first: "john", last: "ramirez"}
// nat: "US"
// phone: "(141)-748-7750"
// picture:
//   large: "https://randomuser.me/api/portraits/men/87.jpg"
// medium: "https://randomuser.me/api/portraits/med/men/87.jpg"
// thumbnail: "https://randomuser.me/api/portraits/thumb/men/87.jpg"
// __proto__: Object
// registered:
//   age: 5
// date: "2012-12-30T05:52:06Z"