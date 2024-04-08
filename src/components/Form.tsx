import React, { ChangeEvent, useState } from 'react'
import useForm from '../hooks/useForm'

export default function Form() {
    const {handleChange, form} = useForm({
        name: 'Marcos',
        email: 'marcos@gmail.com'
    })
    /* const [form, setForm] = useState<FormType>({
        email: '',
        name: ''
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    } */
  return (
    <section style={{padding: '24px', marginBottom: '50px'}}>
        <form>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' value={form.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' value={form.name} onChange={handleChange} />
            </div>
            <span>{JSON.stringify(form)}</span>
        </form>
    </section>
  )
}
