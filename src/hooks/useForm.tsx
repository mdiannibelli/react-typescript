import React, { ChangeEvent, useState } from 'react'

type FormType = {
    email: string;
    name: string;
}

export default function useForm(initialValues: FormType) {
    const [form, setForm] = useState<FormType>(initialValues)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
  return {
    handleChange, form
  }
}
