"use client"
import { useTranslations } from "next-intl"

export default function TailWindTestimonial() {
  const t = useTranslations('Testimonial')
  return (
    <section className="relative isolate overflow-hidden bg-zink px-6  py-10 sm:pt-20 sm:pb-20 lg:px-8">
      <h2 className="container text-center  font-black text-white text-4xl leading-tight pb-1 md:pb-2">{t('testimonial_title1')} <span className="bg-gradient-to-r from-fuchsia-300/80 to-indigo-300/80 bg-clip-text text-transparent">{t('testimonial_span_title')}</span> {t('testimonial_title2')} </h2>
      <div className="grid mx-auto max-w-6xl gap-x-12 gap-y-20 lg:grid-cols-2  items-stretch">
      <div className="lg:max-w-4xl items-stretch">
        <figure className="mt-10 h-full flex flex-col bg-white/5 border border-white/10 p-8 hover:bg-white/8 hover:border-white/20 transition all duration-300">
          <blockquote className=" text-base/5 font-semibold text-white/60 sm:text-base/6">
            <p>
             <span className="text-white/95"> {t('span1')} </span> {t('span2')}
            </p>
          </blockquote>
          <figcaption className="mt-10 mt-auto">
            <img
              alt=""
              src="/Projects-Images/Mark-Client.png"
              className=" size-10 rounded-full"
            />
            <div className="mt-4 flex items-center  space-x-3  text-base">
              <div className="font-semibold text-white/60">{t('testimonial_client1')}</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">{t('client_proffesion1')} </div>
            </div>
          </figcaption>
        </figure>
      </div>

         <div className=" lg:max-w-4xl h-full items-stretch">
        <figure className="mt-10 h-full flex flex-col hover:translate-y-[-2px] duration-300">
          <blockquote className=" text-base/5 font-semibold text-white/60 sm:text-base/6">
            <p>
             <span className="text-white/95"> {t('span3')} </span> {t('span4')}
            </p>
          </blockquote>
          <figcaption className="mt-10 mt-auto">
            <img
              alt=""
              src="/Projects-Images/Classico-review.png"
              className=" size-10 rounded-full"
            />
            <div className="mt-4 flex items-center  space-x-3  text-base">
              <div className="font-semibold text-white/60">{t('testimonial_client2')}</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">{t('client_proffesion2')}</div>
            </div>
          </figcaption>
        </figure>
      </div>

       <div className=" items-stretch lg:max-w-4xl">
        <figure className="mt-10 h-full flex flex-col hover:translate-y-[-2px] duration-300">
          <blockquote className=" text-base/5 font-semibold text-white/60 sm:text-base/6">
            <p>
             <span className="text-white/95"> {t('span5')}</span> {t('span6')} </p>
          </blockquote>
          <figcaption className="mt-10 mt-auto">
            <img
              alt=""
              src="/Projects-Images/Mike-review.png"
              className=" size-10 rounded-full"
            />
            <div className="mt-4 flex items-center  space-x-3  text-base">
              <div className="font-semibold text-white/60">{t('testimonial_client3')}</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600"> {t('client_proffesion3')} </div>
            </div>
          </figcaption>
        </figure>
      </div>
      </div>
    </section>
  )
}