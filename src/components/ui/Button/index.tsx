import { DevIcon } from "@/assets/icons/dev";
import {
  LiaLinkedin,
  LiaInstagram,
  LiaGithub,
  LiaWhatsapp,
} from "react-icons/lia";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiSendPlaneFill } from "react-icons/ri";

import { FaXTwitter } from "react-icons/fa6";

const availableIcons = {
  twitter: <FaXTwitter className="w-4 h-4" />,
  linkedin: <FaLinkedin />,
  instagram: <PiInstagramLogoFill />,
  github: <LiaGithub />,
  whatsapp: <LiaWhatsapp />,
  email: <RiSendPlaneFill />,
  dev: <DevIcon />,
};

export type ButtonProps = {
  children: JSX.Element | string;
  icon?: keyof typeof availableIcons;
};

const Button = ({ children, icon }: ButtonProps) => {
  return (
    <button className="flex justify-center text-sm items-center w-full px-6 py-3 rounded-md text-black-dark bg-white hover:bg-black-dark hover:text-white duration-default">
      {icon ? (
        <div className="w-5 h-5 mr-2 [&>svg]:w-full [&>svg]:h-full">
          {availableIcons[icon]}
        </div>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
