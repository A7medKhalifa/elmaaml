import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Header from "../../../components/HeaderNoDrawer";
import { Dimensions, FlatList, Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import ImageView from "../../../components/ImageView";
import CoustomButton from "../../../components/Button";
import ChooseCamera from "../../../components/ChooseCamera";
import COLORS from "../../../values/colors";
import SearchInput from "../../../components/SearchInput";
import { Formik } from "formik";
import { searchUsers_initial_values } from "../../../forms/initial_values";
import { SearchUsersSchema } from "../../../forms/schema";
import CustomTextInput from "../../../components/CustomTextinput";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../../redux/store";
import { getAllusers } from "../../../redux/User/user.actions";
import { useSelector } from "react-redux";
import { selectAdminData } from "../../../redux/Auth";
import { selectAllUsers } from "../../../redux/User";
const { height, width } = Dimensions.get('screen')

const UserDashboardScreen = () => {
    const [visible, setvisible] = useState(false)
    const [ModalShow, setModalShow] = useState(false)
    const [search, setSearch] = useState<any>('')
    const { navigate } = useNavigation<any>()
    const dispatch = useAppDispatch()
    const Admin = useSelector(selectAdminData)
    const AllUsers = useSelector(selectAllUsers)
    const [Filter, setFilter] = useState<any[]>(AllUsers)
    const searchFilter = (text: any) => {
        if (text) {
            const PaidData = AllUsers.filter((item: any) => {
                const itemData = item?.name
                    ? item?.name.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setSearch(text)
            setFilter(PaidData);
        } else {
            setSearch(text)
            setFilter(AllUsers);
        }
    }
    useEffect(() => {
        dispatch(getAllusers(Admin?.name)).then(() =>
            setFilter(AllUsers)
        )
    }, [])
    useEffect(() => {
        setFilter(AllUsers)
    }, [AllUsers])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Header Title="النتائج" />
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <View style={[styles.Container2]}>
                        <Text style={styles.Header}>البحث</Text>
                        <TextInput
                            placeholder={"أدخل أسم المريض"}
                            placeholderTextColor={'#87898a'}
                            value={search}
                            onChangeText={(value: any) => {
                                searchFilter(value)
                            }}
                            textAlignVertical="bottom"
                            style={[styles.TextInput, { width: '100%' }]}
                        />
                    </View>
                </View>
                <FlatList
                    data={search == '' ? AllUsers : Filter}
                    style={{ width: '100%' }}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
                    renderItem={({ item }) => (
                        <>
                            <TouchableOpacity
                                style={{
                                    height: height * .27,
                                    width: width * .43,
                                    backgroundColor: COLORS.white,
                                    marginVertical: 20,
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.39,
                                    shadowRadius: 8.30,
                                    elevation: 13,
                                }}
                                onPress={() => navigate('Results', { number: item?.Phone_number })}
                                activeOpacity={.8}>
                                <Image
                                    source={{ uri: item?.path }}
                                    style={styles.Image}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: COLORS.black,
                                    marginTop: 20,
                                    textAlign: 'center',
                                    paddingHorizontal: 5
                                }}>{item?.name}</Text>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: COLORS.black,
                                    marginTop: 5
                                }}>{item?.Phone_number}</Text>
                            </TouchableOpacity>
                        </>
                    )}
                />

                <ChooseCamera ModalShow={ModalShow} setModalShow={setModalShow} />
                <ImageView visible={visible} setvisible={setvisible} />
            </SafeAreaView>
        </>
    )
}

export default UserDashboardScreen;