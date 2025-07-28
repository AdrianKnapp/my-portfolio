import { DevIcon } from "@/assets/icons/dev";
import {
  LiaLinkedin,
  LiaInstagram,
  LiaGithub,
  LiaWhatsapp,
} from "react-icons/lia";

import { TbMessagePlus } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

const availableIcons = {
  twitter: <FaXTwitter className="w-4 h-4" />,
  linkedin: <LiaLinkedin />,
  instagram: <LiaInstagram />,
  github: <LiaGithub />,
  whatsapp: <LiaWhatsapp />,
  email: <TbMessagePlus />,
  dev: <DevIcon />,
};

export type ButtonProps = {
  children: JSX.Element | string;
  icon?: keyof typeof availableIcons;
};

const Button = ({ children, icon }: ButtonProps) => {
  return (
    <button className="button">
      {icon ? <div className="button-icon">{availableIcons[icon]}</div> : null}
      {children}
    </button>
  );
};

export default Button;
