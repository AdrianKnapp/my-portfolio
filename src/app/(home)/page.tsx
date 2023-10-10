import Credits from "@/components/common/Credits";
import Profile from "@/components/common/Profile";
import SocialLinks from "@/components/common/SocialLinks";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Profile
        imageUrl="https://avatars.githubusercontent.com/u/71047946?v=4"
        name="Adrian Knapp"
        description={
          <p>
            Senior Software Engineer at{" "}
            <Link href="https://tractian.com/?gad_source=1" target="_blank">
              Trivod
            </Link>
          </p>
        }
      />
      <SocialLinks
        links={[
          {
            icon: "linkedin",
            url: "https://www.linkedin.com/in/adrknapp/",
            name: "LinkedIn",
          },
          {
            icon: "instagram",
            url: "https://www.instagram.com/adrknapp/?hl=pt-br",
            name: "Instagram",
          },
          {
            icon: "github",
            url: "https://github.com/AdrianKnapp",
            name: "GitHub",
          },
          {
            icon: "whatsapp",
            url: "https://wa.me/5553984733103",
            name: "WhatsApp",
          },
          {
            icon: "email",
            url: "mailto:adrknapp@gmail.com",
            name: "E-mail",
          },
        ]}
      />
      <Credits />
    </>
  );
};

export default Home;
