import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div className="h-screen mt-8 bg-theme-light bg-[url('/src/assests/how-to-hire-the-right-person_nyt-jumbo-v2.gif')] bg-blend-overlay bg-no-repeat bg-cover ">
        <div className="container mx-auto pt-16">
          <div className="lg:flex">
            <div className="xl:w-2/5 lg:w-2/5 bg-blend-hard-light bg-cyan-800 bg-[url('/src/assests/mail.gif')] py-16 xl:rounded-r-lg">
              <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                  Get in touch
                </h1>
                <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                  Got a question about us? Are you interested in partnering with
                  us? <br />
                  Have some suggestions? Just contact us. We are here to assist
                  you.
                </p>
                <div className="flex pb-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-phone-call"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <p className="pl-4 text-white text-base">+91 9175003239</p>
                </div>
                <div className="flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#FFFFFF"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <p className="pl-4 text-white text-base">
                    werankresumes@gmail.com
                  </p>
                </div>
                <p className="text-lg text-white pt-10 tracking-wide">
                  <address>
                    B-801, Aero Homes, Sus road
                    <br />
                    Sus gao, Thaksen nagar <br />
                    PUNE 411021
                  </address>
                </p>
                <a href="about">
                  <p className="text-white pt-16 font-bold tracking-wide underline">
                    View Job Openings
                  </p>
                </a>
              </div>
            </div>
            <div className="xl:w-3/5 lg:w-3/5  h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
              <form id="contact" className=" py-4 px-8 rounded-tr rounded-br">
                <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                  Enter Details
                </h1>
                <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                  <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        required
                        id="full_name"
                        name="full_name"
                        type="text"
                        className="focus:outline-none focus:border focus:border-theme-dark font-normal w-64 h-10 flex items-center pl-3 text-sm border-tran-color rounded border"
                        placeholder
                      />
                    </div>
                  </div>
                  <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        className="focus:outline-none focus:border focus:border-theme-dark font-normal w-64 h-10 flex items-center pl-3 text-sm border-tran-color rounded border"
                        placeholder
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-wrap">
                  <div className="w-2/4 max-w-xs">
                    <div className="flex flex-col">
                      <label
                        htmlFor="phone"
                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Phone
                      </label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="tel"
                        className="focus:outline-none focus:border focus:border-theme-dark font-normal w-64 h-10 flex items-center pl-3 text-sm border-tran-color rounded border"
                        placeholder
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6">
                  <div className="flex flex-col">
                    <label
                      className="text-sm font-semibold text-gray-800 mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      placeholder
                      name="message"
                      className="border-tran-color border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-theme-dark"
                      rows={8}
                      id="message"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className=" md:w-30 h-14 bg-theme-dark ease-in duration-200 md:rounded hover:border-theme-dark hover:bg-tran-color hover:text-theme-dark text-white px-8 py-3 text-lg text-center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
