import Button, { ButtonProps } from "@/components/ui/Button";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

type SocialLinksProps = {
  links: {
    icon: ButtonProps["icon"];
    url: string;
    name: string;
  }[];
};

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex flex-col gap-3">
      {links.map(({ icon, url, name }) => (
        <Link key={icon} href={url} target="_blank">
          {icon === "linkedin" ? (
            <RoughNotation
              type="bracket"
              brackets={["top", "bottom"]}
              padding={2}
              show
              color="#10b981"
              animationDelay={2500}
              animationDuration={1000}
            >
              <Button icon={icon}>{name}</Button>
            </RoughNotation>
          ) : (
            <Button icon={icon}>{name}</Button>
          )}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
