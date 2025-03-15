import React, { FC, useState } from "react";
import { Participants } from "../IrnogPageContent/types";
import { FaArrowDown } from "react-icons/fa6";

interface AccordionTableProps {
  Participants: Participants[] | undefined;
}

const AccordionTable: FC<AccordionTableProps> = ({ Participants }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-xs md:text-lg lg:w-3/5 mx-auto mb-14 select-none">
      <div>
        <ul className="shadow-box">
          <li className="relative border-b border-gray-200">
            <button
              type="button"
              className="w-full px-8 py-6 "
              onClick={toggleAccordion}
            >
              <div className="flex flex-col items-center bg-secondary h-24 justify-center rounded-lg cursor-pointer">
                <span className="text-lg font-medium text-white">
                  لیست شرکت کنندگان
                </span>
                <span
                  className={`transform transition-transform duration-300 ease-in-out mt-5 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaArrowDown />
                </span>
              </div>
            </button>
            <div
              className={`relative overflow-hidden transition-all duration-700 ${
                isOpen ? "h-auto" : "max-h-0"
              }`}
            >
              <div className="p-6" dir="rtl">
                <div className="overflow-x-auto">
                  {" "}
                  <table className="w-full min-w-max mx-2 backdrop-blur-sm bg-gradient-to-r from-orange-400/40 to-orange-600/40 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-amber-700 text-white">
                      <tr>
                        <th className="text-center whitespace-nowrap p-3">
                          نام
                        </th>
                        <th className="text-center whitespace-nowrap p-3">
                          نام خانوادگی
                        </th>
                        <th className="text-center whitespace-nowrap p-3">
                          نام شرکت
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Participants &&
                        Participants.map((participant: Participants, index) => (
                          <tr
                            key={index}
                            className="hover:bg-orange-100/10 transition duration-150 ease-in-out text-center"
                          >
                            <td className="whitespace-nowrap p-3 border-t border-gray-200 max-w-24 truncate">
                              {participant.firstname}
                            </td>
                            <td className="whitespace-nowrap p-3 border-t max-w-40 border-gray-200 truncate">
                              {participant.lastname}
                            </td>
                            <td className="whitespace-nowrap p-3 border-t border-gray-200">
                              {participant.company}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccordionTable;
