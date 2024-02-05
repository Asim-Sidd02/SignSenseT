import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
       <section className="text-gray-200 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5 py-24 ">
        <div className="text-center mb-20">
          <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
            Features
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Empower, Connect, Transcend: Unveiling Sign Tutor - Where Real-Time Translation, Multilingual Mastery, and Community Collaboration Redefine Sign Language Learning.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="pattern-dots-md gray-light">
              <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                <img
                src="https://img.icons8.com/?size=64&id=leo7TXtWAMxD&format=gif"
                alt="Custom Icon"
                className="w-6 h-6"
              />
                </div>
                <div className="flex-grow ">
                  <h2 className=" text-xl title-font font-medium mb-3">
                    <b>Real Time Translation</b>
                  </h2>
                  <p className="leading-relaxed text-sm text-justify">
                  Experience instant communication across languages with Sign Sense's real-time translation of sign language. Break barriers, connect effortlessly, and promote inclusivity in a diverse world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="pattern-dots-md gray-light">
              <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                <img
                src="https://img.icons8.com/?size=50&id=ksqAZV3AzJfg&format=gif"
                alt="Custom Icon"
                className="w-6 h-6"
              />
                </div>
                <div className="flex-grow">
                  <h2 className=" text-xl title-font font-medium mb-3">
                   <b>Two Way Translation</b> 
                  </h2>
                  <p className="leading-relaxed text-sm text-justify">
                  Sign Sense's two-way translation transforms sign language to text and vice versa, enabling seamless communication for users of all backgrounds. Break language barriers effortlessly with our dynamic and inclusive feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="pattern-dots-md gray-light">
              <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6 ">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                <img
                src="https://img.icons8.com/?size=80&id=W4C3GdihpLh5&format=png"
                alt="Custom Icon"
                className="w-6 h-6"
              />
                </div>
                <div className="flex-grow">
                  <h2 className=" text-xl title-font font-medium mb-3">
                    <b>Multi-Lingual Support</b>
                  </h2>
                  <p className="leading-relaxed text-sm text-justify">
                    
                    Unlock global communication with Sign Sense's multilingual translation. Our platform seamlessly translates sign language into multiple languages, fostering inclusivity and connecting users worldwide. Break language barriers and enhance your sign language learning journey with ease
                    essayer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default AboutCard
