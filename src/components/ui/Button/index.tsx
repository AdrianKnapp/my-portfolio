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
    <button className="flex items-center text-sm bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-stone-600 hover:bg-stone-700 hover:text-white duration-default border border-stone-300/50">
      {icon ? (
        <div className="w-4 h-4 mr-1.5 [&>svg]:w-full [&>svg]:h-full">
          {availableIcons[icon]}
        </div>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
