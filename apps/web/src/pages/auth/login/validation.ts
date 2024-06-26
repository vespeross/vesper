import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6,"Your password is probably longer").required()
  })
  .required();
