import React from 'react'

const Contact = () => {
    return (
      <>
        <div className="">
          <h1 className="p-4 m-4 text-3xl font-semibold text-center">
            Contact Us
          </h1>
          <form className="w-3/12 m-auto">
            <div className="p-3">
              <label className="px-2">Name:</label>
              <input
                type="text"
                placeholder="name"
                className="border border-b-2 "
              />
            </div>
            <div className="p-3">
              <label className="px-2">Message:</label>
              <input
                type="text"
                placeholder="message"
                className="border border-b-2 "
              />
            </div>
            <div className="p-3">
              <button className="bg-gray-400 m-2 p-2 rounded-lg">Submit</button>
            </div>
          </form>
        </div>
      </>
    );
}

export default Contact