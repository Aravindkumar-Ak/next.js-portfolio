import React from 'react'

const FormInfo = ({handleSubmit,username,text}) => {
  return (
    <div>
        <form
                  onSubmit={handleSubmit}
                  className="bg-white  rounded px-8 pt-6 pb-8 mb-4 bg-gradient-to-tr from-teal-400 to-slate-400"
                >
                  <div class="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      ref={username}
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor=" Textbox"
                    >
                      Textbox
                    </label>
                    <textarea
                      className="resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id=" Textbox"
                      type="text"
                      rows={4}
                      cols={4}
                      ref={text}
                      placeholder="write your text"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className=" px-4 py-2 text-purple-100 bg-green-600 rounded-md "
                    >
                      Submit
                    </button>
                  </div>
                </form>
    </div>
  )
}

export default FormInfo