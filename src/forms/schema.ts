import * as Yup from 'yup';

const includeDigRegExp = /([0-9]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
  password: Yup.string().required("من فضلك ادخل الرقم السري").min(8, "يجب الا يقل الرقم السري عن 8 أحرف"),
  mobile: Yup.string().required("من فضلك ادخل رقم الهاتف").min(11, "رقم الهاتف يجب الا يقل عن 11 رقم"),
});

export const LoginASchema = Yup.object().shape({
  password: Yup.string().required("من فضلك ادخل الرقم السري").min(8, "يجب الا يقل الرقم السري عن 8 أحرف"),
  mobile: Yup.string().required("من فضلك ادخل اليوزر نيم"),
});

export const ForgetSchema = Yup.object().shape({
  mobile: Yup.string().required("من فضلك ادخل رقم الهاتف").min(11, "رقم الهاتف يجب الا يقل عن 11 رقم"),
});

export const ResetPassSchema = Yup.object().shape({
  password: Yup.string().required("من فضلك ادخل الرقم السري").min(8, "يجب الا يقل الرقم السري عن 8 أحرف"),
  confirmPassword: Yup.string().required("من فضلك ادخل تأكيد الرقم السري").oneOf([Yup.ref('password'), ''], "كلمتا المرور غير متطابقه"),
});

export const SearchSchema = Yup.object().shape({
  search: Yup.string().required("من فضلك ادخل كلمة البحث"),
});
export const SearchUsersSchema = Yup.object().shape({
  search: Yup.string().required("من فضلك ادخل كلمة البحث"),
});

export const RegistSchema = Yup.object().shape({
  Name: Yup.string().required("من فضلك ادخل الاسم"),
  password: Yup.string().required("من فضلك ادخل الرقم السري").min(8, "يجب الا يقل الرقم السري عن 8 أحرف"),
  confirmPassword: Yup.string().required("من فضلك ادخل تأكيد الرقم السري").oneOf([Yup.ref('password'), ''], "كلمتا المرور غير متطابقه"),
  mobile: Yup.string().required("من فضلك ادخل رقم الهاتف").min(11, "رقم الهاتف يجب الا يقل عن 11 رقم"),
  // Date: Yup.string().required("من فضلك اختر التاريخ"),
  // gender: Yup.string().required("من فضلك اختر النوع"),
});

export const EditProfileSchema = Yup.object().shape({
  Name: Yup.string().required("من فضلك ادخل الاسم"),
  // Date: Yup.string().required("من فضلك اختر التاريخ"),
  // gender: Yup.string().required("من فضلك اختر النوع"),
});

export const EditPasswordSchema = Yup.object().shape({
  oldpassword: Yup.string().required("من فضلك ادخل الرقم السري القديمه"),
  password: Yup.string().required("من فضلك ادخل الرقم السري").min(8, "يجب الا يقل الرقم السري عن 8 أحرف"),
  confirmPassword: Yup.string().required("من فضلك ادخل تأكيد الرقم السري").oneOf([Yup.ref('password'), ''], "كلمتا المرور غير متطابقه"),
});


export const EditOfferSchema = Yup.object().shape({
  title: Yup.string().required('من فضلك ادخل اسم العرض'),
  description: Yup.string().required('من فضلك ادخل الوصف'),
});


export const AddAdminSchema = Yup.object().shape({
  name: Yup.string().required("من فضلك ادخل اليوزر نيم"),
  mobile: Yup.string().required("من فضلك ادخل رقم الهاتف").min(11, "رقم الهاتف يجب الا يقل عن 11 رقم"),
  password: Yup.string().required("من فضلك ادخل الرقم السري").min(8, "يجب الا يقل الرقم السري عن 8 أحرف"),
  confirmPassword: Yup.string().required("من فضلك ادخل تأكيد الرقم السري").oneOf([Yup.ref('password'), ''], "كلمتا المرور غير متطابقه"),
});

export const resetAdminSchema = Yup.object().shape({
  name: Yup.string().required("من فضلك ادخل اليوزر نيم"),
  password: Yup.string().required("من فضلك ادخل الرقم السري").min(8, "يجب الا يقل الرقم السري عن 8 أحرف"),
});

export const AddM3mlSchema = Yup.object().shape({
  name: Yup.string().required("من فضلك ادخل اليوزر نيم"),
});
