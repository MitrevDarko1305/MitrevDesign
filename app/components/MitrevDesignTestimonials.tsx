"use client"

export default function TailWindTestimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-zink px-6  py-24 sm:pt-8 sm:pb-24 lg:px-8">
      <h2 className="container text-center font-semibold text-white text-4xl leading-tight pb-6">What our <span className="bg-gradient-to-r from-fuchsia-300/80 to-indigo-300/80 bg-clip-text text-transparent">clients</span>  say</h2>
      <div className="grid mx-auto max-w-6xl gap-x-12 gap-y-20 lg:grid-cols-2  items-stretch">
      <div className="lg:max-w-4xl items-stretch">
        <figure className="mt-10 h-full flex flex-col bg-white/5 border border-white/10 p-8 hover:bg-white/8 hover:border-white/20 transition all duration-300">
          <blockquote className=" text-base/5 font-semibold text-white/60 sm:text-base/6">
            <p>
             <span className="text-white/95"> Client service was great throughout </span> the project. They paid close attention to what I wanted and designed a modern, professional website that fits my business perfectly. For the quality of work, the value for money is truly impressive.
            </p>
          </blockquote>
          <figcaption className="mt-10 mt-auto">
            <img
              alt=""
              src="/Projects-Images/Mark-Client.png"
              className=" size-10 rounded-full"
            />
            <div className="mt-4 flex items-center  space-x-3  text-base">
              <div className="font-semibold text-white/60">Mark Eugene</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Personal Trainer </div>
            </div>
          </figcaption>
        </figure>
      </div>

         <div className=" lg:max-w-4xl h-full items-stretch">
        <figure className="mt-10 h-full flex flex-col hover:translate-y-[-2px] duration-300">
          <blockquote className=" text-base/5 font-semibold text-white/60 sm:text-base/6">
            <p>
             <span className="text-white/95"> From the entire </span> band, we can say that working with MitrevDesign was a great experience. Professional team, clear communication, and a high-quality website delivered on time. Highly recommended.
            </p>
          </blockquote>
          <figcaption className="mt-10 mt-auto">
            <img
              alt=""
              src="/Projects-Images/Classico-review.png"
              className=" size-10 rounded-full"
            />
            <div className="mt-4 flex items-center  space-x-3  text-base">
              <div className="font-semibold text-white/60">Klasiko-Band Mk</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Music Band </div>
            </div>
          </figcaption>
        </figure>
      </div>

       <div className=" items-stretch lg:max-w-4xl">
        <figure className="mt-10 h-full flex flex-col hover:translate-y-[-2px] duration-300">
          <blockquote className=" text-base/5 font-semibold text-white/60 sm:text-base/6">
            <p>
             <span className="text-white/95">  Very professional and amazing designs,</span> sharp and clean. Great communication and fast delivery. Would definitely work again. </p>
          </blockquote>
          <figcaption className="mt-10 mt-auto">
            <img
              alt=""
              src="/Projects-Images/Mike-review.png"
              className=" size-10 rounded-full"
            />
            <div className="mt-4 flex items-center  space-x-3  text-base">
              <div className="font-semibold text-white/60">Mykhailo Tretiak</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600"> Social Media Analyst </div>
            </div>
          </figcaption>
        </figure>
      </div>
      </div>
    </section>
  )
}