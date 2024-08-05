import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  phone:Yup.string().required("لطفا شماره همراه خود را وارد کنید.").matches(/^09\d{9}$/ , "(09123456789)لطفا شماره همراه خود را درست وارد کنید")
});

export default loginSchema;
