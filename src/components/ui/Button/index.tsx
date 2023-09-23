import {
  LiaLinkedin,
  LiaInstagram,
  LiaGithub,
  LiaWhatsapp,
} from "react-icons/lia";

const availableIcons = {
  linkedin: <LiaLinkedin />,
  instagram: <LiaInstagram />,
  github: <LiaGithub />,
  whatsapp: <LiaWhatsapp />,
};

type ButtonProps = {
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
