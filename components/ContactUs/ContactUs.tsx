import { FC } from "react";
import { Card } from "../ui/card";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { ContactContent } from "./ContactContent";
import ReactMarkdown from "react-markdown";

interface ContactUsProps {}
const ContactUs: FC<ContactUsProps> = () => {
  return (
    <Card
      className="w-4/5 bg-secondary align-middle m-auto my-16 overflow-hidden rounded-4xl!"
      id="bottom"
    >
      <h1 className="uppercase lg:text-6xl text-4xl text-white font-extrabold text-center select-none">
        contact us
      </h1>
      <div className="flex md:flex-row flex-col gap-10 my-10 mx-4">
        {ContactContent.map((content, index) => {
          return (
            <div
              className=" md:w-1/4 flex flex-col gap-5 items-center "
              key={index}
            >
              <div className="text-lg font-extrabold text-orange-950 select-none">
                {content.title}
              </div>
              <div className="text-center text-white leading-8 select-none">
                <ReactMarkdown>{content.content}</ReactMarkdown>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-8">
        <SocialMediaIcons />
      </div>
    </Card>
  );
};
export default ContactUs;
