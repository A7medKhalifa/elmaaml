interface authState {
  loading: boolean;
  deleteloading: boolean;
  findLab: boolean;
  uploaded: boolean;
  added: boolean;
  users: [{
    id: number,
    name: string,
    Phone_number: any,
    date_of_birth: any,
    gender: string,
    photo: string
  }]
  Lab: {
    id: number;
    name: any,
    title: any,
    active: any,
    description: any,
    user_name: any
    facebook: any
    whatsApp: any
  }
  Images: [
    {
      id: number,
      path: any,
      title: any,
    }
  ]
  Offers: [
    {
      id: number,
      title: any,
      description: any,
      photo_path: any,
    }
  ]
  AllM3ml: [
    {
      id: 1,
      user_name: "",
      name: null,
      title: null,
      active: any,
      facebook: null,
      whatsApp: null,
      description: null,
      created_at: null,
      count_users: 0
    },
  ]
  AllUsers: [
    {
      id: 0,
      name: "",
      path: ""
    }
  ]

}

export const initialState: authState = {
  loading: false,
  deleteloading: false,
  findLab: false,
  uploaded: false,
  added: false,
  users: [],
  Lab: {
    id: 0,
    name: "",
    title: "",
    active: "",
    description: "",
    user_name: "",
    facebook: "",
    whatsApp: ""
  },
  Images: [
    {
      id: 0,
      path: "",
      title: ""
    }
  ],
  Offers: [
    {
      id: 0,
      title: "",
      description: "",
      photo_path: ""
    }
  ],
  AllM3ml: [],
  AllUsers: [],
}