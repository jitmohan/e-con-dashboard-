import * as Yup from "yup";
export const signSchema = Yup.object({
    name:Yup.string().min(4).max(15).required("please enter your name"),
    Password: Yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    Confirm_Password: Yup.string().required().oneOf([Yup.ref('Password'),null],"Password must match"),
})
export const signUpSchema = Yup.object({
email: Yup.string().email().required('please enter your email'),
})

export const signUpSchemas = Yup.object({
    otp: Yup.string().max(6).required('please enter your valid otp'),
    })
    
    

