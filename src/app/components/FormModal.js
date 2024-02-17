import React from 'react'

const FormModal = ({setModalOpen}) => {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 bg-black  mx-auto rounded-lg p-8 text-center">
        <h1 className="text-white text-lg md:text-3xl font-bold">Get in Touch</h1>
        <p className="text-white mt-4">
          I'm open to hearing about new opportunities and collaborations. Feel
          free to ask your doubts, questions, or just say hi.
        </p>

        <button
          className="px-8 py-1 text-purple-100 font-semibold bg-purple-600 rounded-lg mt-4"
          type="button"
          onClick={() => setModalOpen((prev) => !prev)}
        >
          Start a conversation
        </button>
      </div>
  )
}

export default FormModal