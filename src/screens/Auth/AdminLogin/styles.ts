import { StyleSheet } from "react-native";
import COLORS from "../../../values/colors";

export const styles = StyleSheet.create({
Container:{
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20
},
Logo:{
    height: 100,
    width: 150,
    resizeMode: 'contain',
    alignSelf:'center'
},
AppName:{
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: COLORS.green,
},
WelcomeText:{
    textAlign: "center",
    fontSize: 35,
    color: COLORS.black,
    marginBottom: 30
},
ForgetPassword:{
    fontSize: 15,
    fontWeight: '500',
    textDecorationLine: 'underline',
    color: COLORS.black,
    alignSelf: 'flex-end'
},
Create:{
    fontSize: 15,
    fontWeight: '500',
    textDecorationLine: 'underline',
    color: COLORS.green,
    alignSelf: 'center'
}
})