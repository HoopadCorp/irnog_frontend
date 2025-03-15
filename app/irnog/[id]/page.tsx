"use client";

import { useParams } from "next/navigation";
import { FC } from "react";
import { IrnogPageContent } from "@/components/IrnogPageContent/IrnogPageContent";
import NotFoundPage from "@/app/not-found";
import Accordion from "@/components/AccordionTable/Accordion";
import Image from "next/image";

const IrnogPage: FC = () => {
  const params = useParams();
  const { id } = params;
  const page = IrnogPageContent.find((page) => page.key === id);
  const handleOpenMapClick = (link: string | undefined) => {
    window.open(link);
  };
  const allowedID = ["1", "2", "3", "4", "5", "6"];
  if (!allowedID.includes(id as string)) {
    return <NotFoundPage />;
  }
  return (
    <div className="h-auto min-h-screen">
      <>
        <div className="flex flex-col gap-4 items-center mt-14 text-white">
          {/* title */}
          <h1 className=" flex flex-col items-center gap-7 mx-2 my-6">
            <div className="text-3xl lg:text-5xl text-center leading-20">
              {page?.value.title} همایش رسمی گروه گردانندگان شبکه اینترنت ایران
            </div>
            <div className="text-4xl">IRNOG {id}</div>
          </h1>
          {/* time */}
          {page?.value.time && <div>{page?.value.time}</div>}
          {/* location */}
          <div className="mt-2">
            {page?.value.location.country} - {page?.value.location.city}
          </div>
          <div>{page?.value.location.detail}</div>
          {page?.value.location.locationLink && (
            <button
              onClick={() =>
                handleOpenMapClick(page?.value.location.locationLink)
              }
              className=" text-center font-bold  w-36 border border-white rounded-lg p-2 bg-[#ff8c00] cursor-pointer"
            >
              Google Map
            </button>
          )}
          {/* irnog agenda */}
          {page?.value.irnogAgenda && (
            <div
              dir="rtl"
              className="overflow-x-auto   text-xs md:text-lg w-full  flex justify-center mt-28"
            >
              <table className="w-full lg:w-3/5 mx-2 backdrop-blur-sm bg-gradient-to-r from-orange-400/40 to-orange-600/40 shadow-md rounded-lg overflow-hidden">
                <thead className="  bg-amber-700 text-white">
                  <tr>
                    <th className="text-center whitespace-nowrap p-3">
                      شخص ارائه دهنده
                    </th>
                    <th className="text-center whitespace-nowrap p-3">
                      عنوان ارائه
                    </th>
                    {page.value.irnogAgenda.some(
                      (agenda) => agenda.presentationTime
                    ) && (
                      <th className="text-center whitespace-nowrap p-3">
                        ساعت
                      </th>
                    )}
                    <th className="text-center whitespace-nowrap p-3">
                      مستندات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.value.irnogAgenda.map((irnogAgenda, index) => (
                    <tr
                      key={index}
                      className="hover:bg-orange-100/10 transition duration-150 ease-in-out text-center"
                    >
                      <td className="whitespace-nowrap p-3 border-t border-gray-200 max-w-24 truncate">
                        {irnogAgenda.presenter}
                      </td>
                      <td className="whitespace-nowrap p-3 border-t max-w-40 border-gray-200 truncate">
                        {irnogAgenda.presentationTitle}
                      </td>
                      {irnogAgenda.presentationTime && (
                        <td className="whitespace-nowrap p-3 border-t border-gray-200">
                          {irnogAgenda.presentationTime}
                        </td>
                      )}
                      <td className="whitespace-nowrap p-3 border-t border-gray-200">
                        <span
                          onClick={() =>
                            window.open(irnogAgenda.presentationLink)
                          }
                          className="text-white hover:text-secondary cursor-pointer"
                        >
                          مشاهده مستندات
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* sponsors */}
          {page?.value.sponsers && (
            <div className=" h-auto w-5/6 bg-gradient-to-b from-black via-orange-600 to-black flex flex-col items-center px-4 my-10">
              <h1 className="text-6xl text-center text-white my-16">
                حامیان همایش
              </h1>
              {/* hostSponsors */}
              {page?.value.sponsers?.hostSponsors && (
                <>
                  <h1 className="mt-20 text-2xl select-none ">
                    حامی مالی میزبان
                  </h1>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <div
                      className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                      onClick={() =>
                        window.open(page?.value.sponsers?.hostSponsors?.link)
                      }
                    >
                      <img
                        src={page?.value.sponsers.hostSponsors.logo}
                        alt={page?.value.sponsers.hostSponsors.name}
                        className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                      />
                      <div className=" absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-black bg-transparent backdrop-blur-sm bg-opacity-75">
                        {page?.value.sponsers.hostSponsors.name}
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/* platinumSponsors */}
              {page?.value.sponsers?.platinumSponsors && (
                <>
                  <h1 className="mt-20 text-2xl select-none">
                    حامیان مالی پلاتینیوم
                  </h1>

                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {page.value.sponsers.platinumSponsors.map(
                      (sponsor, index) => (
                        <div
                          key={index}
                          className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                          onClick={() => window.open(sponsor.link)}
                        >
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                          />
                          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-black bg-transparent backdrop-blur-sm bg-opacity-75">
                            {sponsor.name}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
              {/* goldSponsors */}
              {page?.value.sponsers?.goldSponsors && (
                <>
                  <h1 className="mt-20 text-2xl select-none">
                    حامیان مالی طلایی
                  </h1>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {page.value.sponsers.goldSponsors.map((sponsor, index) => (
                      <div
                        key={index}
                        className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                        onClick={() => window.open(sponsor.link)}
                      >
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                        />
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-black bg-transparent backdrop-blur-sm bg-opacity-75">
                          {sponsor.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {/* silverSponsors */}
              {page?.value.sponsers?.silverSponsors && (
                <>
                  <h1 className="mt-20 text-2xl select-none">
                    حامیان مالی نقره ای
                  </h1>

                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {page.value.sponsers.silverSponsors.map(
                      (sponsor, index) => (
                        <div
                          key={index}
                          className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                          onClick={() => window.open(sponsor.link)}
                        >
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                          />
                          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-black bg-transparent backdrop-blur-sm bg-opacity-75">
                            {sponsor.name}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
              {/* ConnectivitySponsors */}
              {page?.value.sponsers?.ConnectivitySponsors && (
                <>
                  <h1 className="mt-20 text-2xl select-none">
                    Connectivity حامیان
                  </h1>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {page.value.sponsers.ConnectivitySponsors.map(
                      (sponsor, index) => (
                        <div
                          key={index}
                          className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                          onClick={() => window.open(sponsor.link)}
                        >
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                          />
                          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-black bg-transparent backdrop-blur-sm bg-opacity-75">
                            {sponsor.name}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
              {/* moralSponsor */}
              {page?.value.sponsers?.moralSponsor && (
                <>
                  <h1 className="mt-20 text-2xl select-none">حامی معنوی</h1>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {page.value.sponsers.moralSponsor.map((sponsor, index) => (
                      <div
                        key={index}
                        className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                        onClick={() => window.open(sponsor.link)}
                      >
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="object-cover w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:blur-xs"
                        />
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-center text-black bg-transparent backdrop-blur-sm bg-opacity-75">
                          {sponsor.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          {/* gallery */}
          {page?.value.gallery && (
            <>
              <h1 className="text-white text-3xl text-center mt-24">گالری</h1>
              <div className="flex flex-wrap justify-center gap-4 mx-2 mt-8">
                {page.value.gallery.map((image, index) => (
                  <Image
                    key={index}
                    src={image.image}
                    width={400}
                    height={400}
                    alt="gallery"
                    className="rounded-lg"
                  />
                ))}
              </div>
            </>
          )}
          {/* Participants */}
          {page?.value.Participants && (
            <Accordion Participants={page?.value.Participants} />
          )}
        </div>
      </>
    </div>
  );
};
export default IrnogPage;
