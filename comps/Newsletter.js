import React from 'react'
import Section from './Section'
import Input from './Input'
import Button from './Button'

export default function Newsletter(props) {
    return (
        <Section>
            <div className="flex flex-col justify-center items-center py-10 mx-auto px-20">
                <div className="text-2xl text-white py-5">
                    Subscribe up for my weekly newsletter
                </div>
                <div className="w-full pb-5">
                    <Input name="Email"/>
                
                </div>
                <Button>
                    Subscribe
                </Button>
            </div>
        </Section>
    )
}

