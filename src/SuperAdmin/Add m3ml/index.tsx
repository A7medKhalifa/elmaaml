import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { AddM3mlSchema } from "../../forms/schema";
import CustomTextInput from "../../components/CustomTextinput";
import CoustomButton from "../../components/Button";
import { styles } from "./styles";
import Header from "../../components/HeaderNoDrawer";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { addNewM3ml } from "../../redux/User/user.actions";
import { selectAdded, selectLoading } from "../../redux/User";

const Addm3ml = () => {
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch()
    const loading = useSelector(selectLoading)
    const DoneAdded = useSelector(selectAdded)

    useEffect(() => {
        DoneAdded && navigation.navigate("Home")
    }, [DoneAdded])
    return (
        <>
            <SafeAreaView style={styles.Container}>
                <Header Title="إضافة معمل جديد" />
                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                    style={styles.KeyboardAwareScrollView}>
                    <Formik
                        initialValues={{
                            name: '',
                        }}
                        validationSchema={AddM3mlSchema}
                        onSubmit={(values) => {
                            dispatch(addNewM3ml({
                                user_name: values?.name,
                                active: 1
                            }))
                        }}>
                        {(props) => (
                            <>
                                <CustomTextInput
                                    {...props}
                                    name='name'
                                    Title="اليوزر نيم للمعمل"
                                    placeholder="أدخل اليوزر نيم"
                                    values={props.values}
                                />
                                <CoustomButton
                                    onpress={() => {
                                        props.handleSubmit()
                                        console.log(JSON.stringify(props.errors))
                                    }}
                                    loading={loading}
                                    Title="إضافة"
                                    style={{
                                        marginVertical: 50,
                                    }}
                                />
                            </>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </>
    )
}

export default Addm3ml;