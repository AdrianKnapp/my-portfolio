import Button, { ButtonProps } from "@/components/ui/Button";
import Link from "next/link";

type SocialLinksProps = {
  links: {
    icon: ButtonProps["icon"];
    url: string;
    name: string;
  }[];
};

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ icon, url, name }) => (
        <Link key={icon} href={url} target="_blank">
          <Button icon={icon}>{name}</Button>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
