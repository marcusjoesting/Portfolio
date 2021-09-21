import React from 'react'
import Section from './Section'
import Button from './Button'
import {uploadMessage} from '../pages/api/firebase'
import {Element} from 'react-scroll'
export default function ContactForm(props) {
    const [openModal, setOpenModal] = React.useState(false)
    const [formDetails,setFormDetails] = React.useState({})
    const submit = e => {
      e.preventDefault()
      uploadMessage({...formDetails})
      .then(res => {
        console.log(res)
        setOpenModal(true)
      })
      .catch(err => {
        console.log(err)
      })
    }

    const onChangeHandler = (id, value) => {
      setFormDetails(x => {
        return {...x, [`${id}`]:value}
      })
    }

    return (
      <Element name="Contact">
        <Section header="Contact Me" subheader="Let me know how I can help your business">
          <div className='bg-white bg-opacity-50 shadow-xl p-8 text-black'>
            <form action="#" method="POST">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <Input name="First Name" onChange={x => onChangeHandler('first',x)}/>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <Input name="Last Name" onChange={x => onChangeHandler('last',x)}/>
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <Input name="Email Address" onChange={x => onChangeHandler('email',x)}/>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Input name="Message" onChange={x => onChangeHandler('message',x)} rows/>
                    </div>
                
              </div>
            </form>
            <div className="py-6">
            <Button onClick={submit}>Send Message</Button>
            </div>

            </div>
      </Section>
      </Element>
    )
}


export function Input(props) {
    return(
        <>
            <label htmlFor={props.name} className="block text-sm font-medium text-black">
            {props.name}
        </label>
        <input
            type="text"
            name={props.name}
            id={props.name}
            autoComplete={props.name}
            onChange={e => props.onChange(e.target.value)}
            className="mt-1 p-4 focus:ring-white bg-white bg-opacity-80 focus:border-white block w-full shadow sm:text-sm border-gray-300 rounded-md"

        />
      </>
    )
}