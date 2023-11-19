interface authState {
  secure: boolean
  loading: boolean
  verified: boolean
  isAuth: boolean
  noactive: boolean
  Admin: boolean
  reset: boolean
  forgot: boolean
  Changed: boolean
  Intro: boolean
  registed: boolean
  user: {
    id: any,
    name: any,
    gender: any,
    Phone_number: any,
    date_of_birth: any,
    photo: any,
    token: any
  }

  userAdmin: {
    id: any,
    name: any,
    phone: any,
    token: any,
    data_of_factory: {
      id: number,
      user_name: any,
      name: any,
      title: any,
      active: any,
      description: any
      facebook: any
      whatsApp: any
    }
  }
}

export const initialState: authState = {
  secure: true,
  noactive: false,
  isAuth: false,
  verified: false,
  registed: false,
  Intro: false,
  Changed: false,
  Admin: false,
  reset: false,
  forgot: false,
  loading: false,
  user: {
    id: 1,
    name: "",
    gender: "",
    Phone_number: "",
    date_of_birth: "",
    photo: null,
    token: ""
  },
  userAdmin: {
    id: 1,
    name: "",
    phone: "",
    token: "",
    data_of_factory: {
      id: 0,
      user_name: "",
      name: "",
      title: "",
      active: "",
      description: "",
      facebook:"",
      whatsApp: "",
    }
  }
}