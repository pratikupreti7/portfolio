import React, { useState } from 'react'

const CVRequestModal = ({ onClose }) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      subject: 'CV Request',
      name: e.target.name.value,
      email: e.target.email.value,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/sendcv'

    // Form the request for sending data to the server
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const resData = await response.json()

    if (response.status === 200) {
      console.log('Message sent.')
      setEmailSubmitted(true)
      // Consider removing the setTimeout to allow the user to close the modal manually
    }
  }

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        {emailSubmitted ? (
          <div className="text-center">
            <p className="text-green-500 mb-4">
              Thank you! I will send my CV to your email shortly.
            </p>
            <button
              className="bg-white-500 border-2 hover:border-none hover:bg-red-600 hover:text-gray-50 text-black  font-medium py-2.5 px-5 rounded-lg "
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <div className="">
            <form onSubmit={handleSubmit} className="flex flex-col ">
              <h2 className=" text-xl font-bold font-sans">
                Hey there ! Sorry for this small hiccup 😇
              </h2>
              <p className="mb-2 text-red-500">
                Note : To avoid spam,I will email you my resume.
              </p>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  required
                  className="bg-[#18191E] border border-[#33353F] focus:border-purple-500 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Jacob Smith"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] focus:border-purple-500 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="email@example.com"
                />
              </div>
              <div className="md:flex md:flex-row  items-center justify-center gap-8">
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg "
                >
                  Request CV
                </button>
                <button
                  className="bg-white-500 border-2 hover:border-none hover:bg-red-600 hover:text-gray-50 text-black  font-medium py-2.5 px-5 rounded-lg "
                  onClick={onClose}
                >
                  Cancel Request
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default CVRequestModal
