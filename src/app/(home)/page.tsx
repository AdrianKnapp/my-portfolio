import Profile from "@/components/common/Profile";
import SocialLinks from "@/components/common/SocialLinks";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Profile
        imageUrl="https://avatars.githubusercontent.com/u/71047946?v=4"
        name="Adrian Knapp"
        description={
          <>
            Senior Software Engineer at{" "}
            <Link href="https://tractian.com/?gad_source=1" target="_blank">
              Tractian
            </Link>
          </>
        }
      />
      <div className="flex flex-col gap-8">
        <p className="text-base text-black-default  font-light">
          With over 6 years of experience in software development, I create
          solutions that combine performance, scalability, and simplicity.
        </p>
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
      </div>
      {/* <Credits /> */}
    </div>
  );
};

export default Home;
