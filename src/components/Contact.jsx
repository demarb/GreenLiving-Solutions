import React from 'react'
import { useState } from 'react'


export default function Contact() {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    return (
        <section id='contact' className='px-40 py-14 w-full mx-auto max-sm:px-5'>
            <h1 className='text-3xl text-white'>Get in Touch</h1>
            <div className='flex flex-col'>
                <input onChange={(e)=>setName(e.target.value)} type='text' value={name} placeholder='Enter name' name='name' className='p-3 rounded-lg my-2'></input>
                <input onChange={(e)=>setEmail(e.target.value)} type='email' value={email} placeholder='Enter email' name='email' className='p-3 rounded-lg my-2'></input>
                <textarea onChange={(e)=>setMessage(e.target.value)} value={message} placeholder='Enter message' name='message' rows={4} cols={40} className='p-3 rounded-lg my-2' ></textarea>
                <button className='text-white border-solid border border-white rounded-lg my-4 p-3 hover:cursor-pointer hover:border-amber-600'>Submit</button>
            </div>
        </section>
    )
}
