import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const formData = [
    {
        label: 'Name',
        id: 'name',
        type: 'text',
        placeholder: 'Name',
        required: true,
        validate: {
            minLength: 3
        }
    },
    {
        label: 'Email',
        id: 'email',
        type: 'text',
        placeholder: 'Email',
        required: true,

    },
    {
        label: 'Password',
        id: 'password',
        type: 'password',
        placeholder: 'Password',
        required: true,
        validate: {
            minLength: 8
        },
        icon: {
            open: FaEye,
            close: FaEyeSlash
        }

    },
    {
        label: 'Confirm Password',
        id: 'confirmPassword',
        type: 'password',
        placeholder: 'Confirm Password',
        required: true,
        validate: {
            minLength: 8
        },
        icon: {
            open: FaEye,
            close: FaEyeSlash
        }
    }
]