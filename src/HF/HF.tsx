import { CameraRoll } from '@react-native-camera-roll/camera-roll'
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import RNFetchBlob from 'rn-fetch-blob'
import { PermissionsAndroid, Platform } from "react-native";
import DocumentPicker from 'react-native-document-picker';
import Toast from 'react-native-root-toast';

const ImagePlaceHolder = 'data:image/jpeg;base64,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'
const OfferPlaceHolder = 'https://freepngimg.com/convert-png/19234-special-offer-png-pic'


export const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "Cool Photo App Camera Permission",
                message: "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};

const pickImageFromGallary = (setVisable: any, setImage: any) => {
    let options = {
        mediaType: 'photo',
        quality: 1,
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    launchImageLibrary(options, (res) => {

        if (res.didCancel) {
            console.log('User cancelled image picker');
        } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
        } else {
            setImage(res)
            setVisable(false)
        }
    });
}
function isImage(url: any) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}


const openCamera = (setVisable: any, setImage: any) => {
    let options = {
        mediaType: 'photo',
        quality: 1,
        saveToPhotos: false,
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    launchCamera(options, (res) => {
        console.log('Response = ', res);
        if (res.didCancel) {
            console.log('User cancelled image picker');
        } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
        } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
        } else {
            console.log('response', JSON.stringify(res));
            setImage(res)
            setVisable(false)
        }
    });
}



const downloadFileOnSuccess = async (path: any, setLoading?: any) => {
    setLoading(true)
    let dirs =
        Platform.OS == 'ios'
            ? RNFetchBlob.fs.dirs.DocumentDir
            : RNFetchBlob.fs.dirs.DocumentDir;
    console.log(dirs, 'document path');
    RNFetchBlob.config({
        fileCache: true,
        path: dirs + `/wow13.pdf`,
    })
        .fetch('GET', path,)
        .then(res => {
            Toast.show('تم التنزيل بنجاح', {
                duration: Toast.durations.LONG,
                position: Toast.positions.TOP,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                containerStyle: {
                    marginTop: Platform.OS == 'ios' ? 22 : 0,
                    backgroundColor: 'green'
                }
            })
            console.log('The file saved to ', res.path());
            setLoading(false)
        });
}
export const getFileExtention = (fileUrl: any) => {
    return /[.]/.exec(fileUrl) ?
        /[^.]+$/.exec(fileUrl) : undefined;
};

export const downloadFile = (fileUrl: any,setLoading?: any) => {
    setLoading(true)
    let date = new Date();
    let FILE_URL = fileUrl;
    let file_ext = getFileExtention(FILE_URL);

    file_ext = '.' + 'pdf';

    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
        fileCache: true,
        addAndroidDownloads: {
            path:
                RootDir +
                '/file_' +
                Math.floor(date.getTime() + date.getSeconds() / 2) +
                file_ext,
            description: 'downloading file...',
            notification: true,
            useDownloadManager: true,
        },
    };
    config(options)
        .fetch('GET', FILE_URL)
        .then(res => {
            console.log('res -> ', JSON.stringify(res.data));
            setLoading(false)
            Toast.show('تم التنزيل بنجاح', {
                duration: Toast.durations.LONG,
                position: Toast.positions.TOP,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                containerStyle: {
                    marginTop: Platform.OS == 'ios' ? 22 : 0,
                    backgroundColor: 'green'
                }
            })
        })
};
const handleDownload = async (item: any, setLoading?: any, setVisable?: any) => {
    console.warn((item))
    setLoading(true)
    RNFetchBlob.config({
        fileCache: true,
        appendExt: 'jpg',
    }).fetch('GET', item)
        .then((res: any) => {
            CameraRoll.save(res.data)
                .then(() => {
                    setLoading(false)
                    setVisable(false)
                    Toast.show('تم التنزيل بنجاح', {
                        duration: Toast.durations.LONG,
                        position: Toast.positions.TOP,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        containerStyle: {
                            marginTop: Platform.OS == 'ios' ? 22 : 0,
                            backgroundColor: 'green'
                        }
                    })
                })
                .catch(err => {
                    setLoading(false)
                    setVisable(false)
                    console.log(err)
                    Toast.show(err.message, {
                        duration: Toast.durations.LONG,
                        position: Toast.positions.TOP,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        containerStyle: {
                            marginTop: Platform.OS == 'ios' ? 22 : 0,
                            backgroundColor: '#f00'
                        }
                    })
                });
        })
        .catch((error: any) => {
            setLoading(false)
            setVisable(false)
            Toast.show(error.message, {
                duration: Toast.durations.LONG,
                position: Toast.positions.TOP,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                containerStyle: {
                    marginTop: Platform.OS == 'ios' ? 22 : 0,
                    backgroundColor: '#f00'
                }
            })
        });
};

const uploadFile = async (setFieldValue: any) => {
    try {
        const res: any = await DocumentPicker.pick({
            type: [DocumentPicker.types.pdf],
        })
        setFieldValue(res[0])
    } catch (err) {
        setFieldValue('')
        if (DocumentPicker.isCancel(err)) {
            console.log('Canceled');
        } else {
            console.log('Unknown Error: ' + JSON.stringify(err));
            throw err;
        }
    }
}
export {
    openCamera,
    pickImageFromGallary,
    ImagePlaceHolder,
    handleDownload,
    downloadFileOnSuccess,
    isImage,
    uploadFile,
    OfferPlaceHolder
}