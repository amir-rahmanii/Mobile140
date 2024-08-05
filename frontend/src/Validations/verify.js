import * as Yup from "yup";

const verifySchema = Yup.object().shape({
    code: Yup.string().required("لطفا کد تایید را وارد کنید.").matches(/^\d{4,5}$/, "کد تایید فقط شامل اعداد میباشد و 4 یا 5 رقمی میباشد."),
});

export default verifySchema;
