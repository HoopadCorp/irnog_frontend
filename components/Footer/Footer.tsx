import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div>
      <div className="mb-5">
        کلیه حقوق این وب سایت متعلق به انجمن ایرناگ می‌باشد © 2017-2025
      </div>
      <div>
        Sponsored and developed by {""}
        <Link
          href="https://hoopadcloud.com"
          target="_blank"
          className="text-blue-500 "
        >
          Hoopad Cloud
        </Link>
      </div>
    </div>
  );
};

export default Footer;
