import Profile from "@/components/common/Profile";
import SocialLinks from "@/components/common/SocialLinks";
import Link from "next/link";

export const SUBTITLE =
  "Creating solutions that combine performance, scalability, and simplicity.";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Profile
        imageUrl="https://avatars.githubusercontent.com/u/71047946?v=4"
        name="Adrian Knapp"
        description={
          <>
            Senior Software Engineer at{" "}
            <Link href="https://wellhub.com/" target="_blank">
              Wellhub (Gympass)
            </Link>
          </>
        }
      />
      <div className="flex flex-col gap-8">
        <p className="text-base text-black-default text-center font-light">
          {SUBTITLE}
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
              icon: "dev",
              url: "https://dev.to/adrianknapp",
              name: "dev.to (Articles)",
            },
            {
              icon: "email",
              url: "mailto:adrknapp@gmail.com",
              name: "Send an e-mail",
            },
          ]}
        />
      </div>
      {/* <Credits /> */}
    </div>
  );
};

export default Home;
