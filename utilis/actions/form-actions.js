'use server'

import User from "../models/User"

export const FormGetData = async (formData) => {
    const name = formData.get('name')
    const age = formData.get('age')
    const email = formData.get('email')
    await User.create({name , age , email})
}