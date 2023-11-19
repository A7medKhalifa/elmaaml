import React, { useEffect, useState } from "react";
import ReactNativeModal from "react-native-modal";
import { Image, TouchableOpacity, View } from "react-native";
import ChooseCamera from "../../../components/ChooseCamera";
import { Formik } from "formik";
import CustomTextInput from "../../../components/CustomTextinput";
import CoustomButton from "../../../components/Button";
import { EditOfferSchema } from "../../../forms/schema";
import { OfferPlaceHolder } from "../../../HF/HF";
import { useAppDispatch } from "../../../redux/store";
import { GetAdminOffers, addAdminOffers, editAdminOffers } from "../../../redux/User/user.actions";


export const ModalOffer = ({
    id,
    Data,
    name,
    setId,
    visible,
    setvisible
}: {
    id?: number
    Data?: any
    name?: string;
    setId?: any;
    visible?: boolean
    setvisible?: any
}
) => {
    const [Avatar, setAvatar] = useState<any>(null)
    const [Camera, setCamera] = useState<any>(false)
    const [loading, setLoading] = useState<any>(false)
    const dispatch = useAppDispatch()
    // alert(JSON.stringify(Data))
    useEffect(() => {
        setLoading(false)
    }, [])
    return (
        <ReactNativeModal
            onBackdropPress={() => {
                setLoading(false)
                setvisible(false)
                setAvatar(null)
                setId(-1)
            }}
            onBackButtonPress={() => {
                setLoading(false)
                setvisible(false)
                setAvatar(null)
                setId(-1)
            }}
            isVisible={visible}>
            <View style={{
                width: '100%',
                paddingVertical: 30,
                padding: 20,
                backgroundColor: '#fff',
                borderRadius: 20
            }}>
                <ChooseCamera setImage={setAvatar} ModalShow={Camera} setModalShow={setCamera} />
                <Formik
                    initialValues={{
                        title: id == -1 ? '' : Data?.title as string,
                        description: id == -1 ? '' : Data?.description as string,
                    }}
                    validationSchema={EditOfferSchema}
                    onSubmit={(values) => {
                        setLoading(true)
                        const formdata: any = new FormData();
                        formdata.append('id', id)
                        formdata.append('name', name)
                        formdata.append('title', values.title)
                        formdata.append('description', values.description)
                        {
                            Avatar &&
                                formdata.append('photo', {
                                    uri: Avatar?.assets[0]?.uri,
                                    type: Avatar?.assets[0]?.type,
                                    name: Avatar?.assets[0]?.uri,
                                })
                        }
                        {
                            id == -1 ?
                                dispatch(addAdminOffers(formdata)).then(
                                    () => {
                                        dispatch(GetAdminOffers({ name: name }))
                                        setLoading(false)
                                        setvisible(false)
                                        setAvatar(null)
                                        setId(-1)
                                    }
                                )
                                :
                                dispatch(editAdminOffers(formdata)).then(
                                    () => {
                                        dispatch(GetAdminOffers({ name: name }))
                                        setLoading(false)
                                        setvisible(false)
                                        setAvatar(null)
                                        setId(-1)
                                    }
                                )
                        }
                    }}>
                    {(props) => (
                        <>
                            <TouchableOpacity onPress={() => { setCamera(true) }}>
                                <Image source={{ uri: (Avatar?.assets[0]?.uri ? Avatar?.assets[0]?.uri : ((Data?.photo_path) ? (Data?.photo_path) : OfferPlaceHolder)) }} style={{
                                    height: 130,
                                    width: 130,
                                    borderRadius: 20,
                                    alignSelf: 'center',
                                    marginBottom: 20
                                }} />
                            </TouchableOpacity>

                            <CustomTextInput
                                {...props}
                                name='title'
                                Title="اسم العرض"
                                placeholder="أدخل اسم العرض"
                                values={props.values}
                                secure={false}
                            />
                            <CustomTextInput
                                {...props}
                                name='description'
                                Title="الوصف"
                                placeholder="أدخل الوصف"
                                values={props.values}
                                multiline
                            />
                            <CoustomButton
                                onpress={() => {
                                    // console.log(props.errors)
                                    props.handleSubmit()
                                }}
                                loading={loading}
                                Title={id == -1 ? "إضافة" : "تعديل"}
                            />
                        </>
                    )}
                </Formik>

            </View>
        </ReactNativeModal>
    )

}