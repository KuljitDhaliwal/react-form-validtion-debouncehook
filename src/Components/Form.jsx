import React, { useEffect, useRef, useState } from 'react'
import { formData } from '../StaticData/FormData'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Input from './Input'
import { useDebounce } from '../Hooks/Debounce';
function Form() {
    const [error, setError] = useState({})
    const [show, setShow] = useState({
        password: false,
        confirmPassword: false,
    })
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [disbale, setDisable] = useState(true)
    let timerRef = useRef()

    //Handle Onchange Value
    const handleChangeInput = (e) => {
        setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    //Handle Validation

    const handleValidation = () => {
        let obj = {}
        formData.forEach((item, key) => {
            const field = formValue[item.id]

            //Set Valid Length
            if (item.validate?.minLength) {
                if (field.length === 0) return
                if (field.length < item.validate?.minLength) {
                    obj[item.id] = `${item.label} must have atleast ${item.validate?.minLength} letters`;
                } else {
                    delete obj[item.id]
                }
            }


            //Email Validation
            if (item.id === 'email' && formValue.email !== '') {
                const email = formValue.email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(email)) {
                    obj[item.id] = `Please enter a valid email address.`;
                } else {
                    delete obj[item.id]

                }
            }


            //if Password and confirm-password not match
            if (item.id === 'password' || item.id === 'confirmPassword') {
                if (formValue['password'].length >= item.validate?.minLength &&
                    formValue['confirmPassword'].length >= item.validate?.minLength) {
                    const password = formValue['password']
                    const confirmPassword = formValue['confirmPassword']
                    if (password !== confirmPassword) {
                        obj[item.id] = `Password not matching..`;
                    } else {
                        delete obj[item.id]

                    }
                }
            }

            //If Password not validate
            if (item.id === 'password' && formValue.password !== '' && formValue.password.length > item.validate?.minLength) {
                const password = formValue.password
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
                if (!passwordRegex.test(password)) {
                    obj[item.id] = `Password must have 1 uppercase, 1 special character..`;
                } else {
                    delete obj[item.id]

                }
            }

        })
        setError(obj)
    }

    //Debounce Function
    // const debounce = (fun, delay) => {
    //     return function (e) {
    //         clearTimeout(timerRef.current)
    //         timerRef.current = setTimeout(() => {
    //             fun(e)
    //         }, delay)
    //     }
    // }


    const debounceFun = useDebounce(handleValidation, 1000, timerRef.current)

    useEffect(() => {
        debounceFun()
        return ()=>{
            clearTimeout(timerRef.current)
        }
    }, [formValue])


    useEffect(() => {
        if (formValue.name !== '' &&
            formValue.email !== '' &&
            formValue.password !== '' &&
            formValue.confirmPassword !== ''
        ) {
            if (Object.keys(error).length !== 0) {
                setDisable(true)
            } else {
                setDisable(false)
            }
        }
    }, [error])




    //Set Errors
    const handleErrors = () => {
        for (let [key, value] of Object.entries(formValue)) {
            if (value === '') {
                setError((prev) => ({ ...prev, [key]: `Please fill ${key} value.` }))
            }
        }
    }



    return (
        <div className='rounded-2xl bg-white/10 p-10'>
            <div className="form text-white">
                <p className='text-center'>Register with:</p>
                <div className="flex justify-between items-center gap-4 mt-4">
                    <button className='flex gap-2 rounded-2xl cursor-pointer bg-white/20 w-full p-3 justify-center px-4'>Google</button>
                    <button className='flex gap-2 rounded-2xl cursor-pointer bg-white/20 w-full p-3 justify-center px-4'>Github</button>
                </div>
                <div className='flex items-center gap-2 w-full my-6'>
                    <div className="left h-[0.1px] bg-gray-600 w-full"></div>
                    <p>or</p>
                    <div className="left h-[0.1px] bg-gray-600 w-full"></div>
                </div>
                <div className='form'>
                    <div className="grid md:grid-cols-2 gap-1">
                        {formData.map((input, key) => {
                            const OpenEye = input?.icon?.open
                            const CloseEye = input?.icon?.close
                            return <div key={input.id} className={`grid relative ${key > 1 ? 'md:col-span-2' : ''}`}>
                                <label htmlFor={input.id}>{input.label}</label>
                                {console.log('Show password',show, show[input.id])}
                                <div className="flex items-center">
                                    <Input type={input.id === 'password' || input.id === 'confirmPassword' ? 
                                     show[input.id] ?  'text' : input.type : input.type} options={input} value={formValue[input.id]} onChange={(e) => handleChangeInput(e)}
                                        className={`${error[input.id] ? 'border-red-400 bg-red-300 focus:border-red-400' : 'border-gray-400 bg-white/20'} w-full`} />
                                    {input.id === 'password' || input.id === 'confirmPassword' ? 
                                     show[input.id] ? <CloseEye className={`absolute right-1 cursor-pointer`} onClick={()=> setShow(prev=> ({...prev, [input.id]: false}))}/> : <OpenEye className={`absolute right-1 cursor-pointer`} onClick={()=> setShow(prev=> ({...prev, [input.id]: true}))}/> : null}
                                </div>
                                <small className={`${error[input.id] ? 'opacity-100' : 'opacity-0'} text-red-500 mt-1 transition-opacity duration-100`}>{error[input.id] ? error[input.id] : '...'}</small>
                            </div>
                        })}
                    </div>
                    <button disabled={disbale} className='bg-linear-180 from-blue-700 to-blue-600
                    p-4 disabled:bg-linear-180 disabled:from-gray-400 disabled:to-gray-500 disabled:opacity-50 disabled:cursor-not-allowed
                    disabled:hover:bg-gray-400
                    cursor-pointer hover:bg-linear-120 hover:from-blue-700 hover:to-blue-600 
                    w-full rounded-lg my-6 active:scale-95' onClick={() => handleErrors()}>
                        Signup
                    </button>
                    <small className='text-gray-500'>
                        By creating an account, you agree to the
                        <span className='underline text-white cursor-pointer'> Terms of Service</span>.
                        We'll occasionally send you account-related emails.
                    </small>

                    <p className='text-white mt-6 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer'>Login</span></p>
                </div>
            </div>
        </div>
    )
}

export default Form