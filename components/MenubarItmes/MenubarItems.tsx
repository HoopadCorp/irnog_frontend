"use client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenubarItemsProps {
  setOpen?: (open: boolean) => void;
}

const menubarItemsArray = [
  { name: "تهیه بلیط", link: "/buyTicket" },
  { name: "هماهنگی برای ارائه", link: "/cfp" },
  { name: "شیوه نامه", link: "/rules" },
  { name: "راه های ارتباطی ایرناگ", link: "/" },
  { name: "همایش ها", link: "/" },
];

const eventItemsArray = [
  { name: "ایرناگ ۱", link: "/irnog/1" },
  { name: "ایرناگ ۲", link: "/irnog/2" },
  { name: "ایرناگ ۳", link: "/irnog/3" },
  { name: "ایرناگ ۴	", link: "/irnog/4" },
  { name: "ایرناگ ۵", link: "/irnog/5" },
  { name: "ایرناگ ۶", link: "/irnog/6" },
];

const MenubarItems: FC<MenubarItemsProps> = ({ setOpen }) => {
  const router = useRouter();

  const handleClick = (link: string) => {
    if (setOpen) {
      setOpen(false);
    }

    if (link === "/") {
      router.push("/#bottom");
    } else {
      router.push(link);
    }
  };
  const handleIrnogPageClick = (link: string) => {
    if (setOpen) {
      setOpen(false);
    }
    router.push(link);
  };
  return (
    <>
      {menubarItemsArray.map((item, index) => (
        <div key={index}>
          <div>
            <li className="flex flex-row list-none! ">
              {item.name === "همایش ها" ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="text-white hover:text-secondary px-4 py-2 rounded-md transition-colors duration-200 hover:cursor-pointer ">
                        {item.name}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40 bg-secondary border border-white rounded-lg shadow-lg">
                      <div>
                        {eventItemsArray.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => handleIrnogPageClick(item.link)}
                            className="cursor-pointer  hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md transition-colors duration-200 "
                            dir="rtl"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div
                  className={`mx-2 uppercase text-white hover:text-secondary cursor-pointer ${
                    index === 0 ? "text-secondary hover:text-white" : ""
                  }`}
                  onClick={() => handleClick(item.link)}
                >
                  {item.name}
                </div>
              )}
            </li>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenubarItems;
