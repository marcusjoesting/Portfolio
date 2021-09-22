import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Button from './Button'
export default function Modal(props) {


  return (
    <>
      <Transition appear show={props.open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed  inset-0 z-10 overflow-y-auto"
          onClose={() => props.setOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full bg-gradient-to-tr from-blue-300 to-green-300 max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {props.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-800">
                    {props.message}
                  </p>
                </div>

                <div className="mt-4">
                  <Button onClick={() => props.setOpen(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
