import * as Yup from "yup";

const newsLetterSchema = Yup.object().shape({
    email: Yup.string().required("لطفا ایمیل خود را وارد کنید.").email("ایمیل خود را درست وارد کنید.").min(13, "ایمیل حداقل باید 13 حروف باشد.").max(30, "ایمیل حداکثر باید 30 حروف باشد."),
});

export default newsLetterSchema;
