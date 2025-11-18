import Profile from "@/components/common/Profile";
import SocialLinks from "@/components/common/SocialLinks";
import Link from "next/link";
import { subtitle } from "./copy";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Profile
        imageUrl="https://avatars.githubusercontent.com/u/71047946?v=4"
        name="Adrian Knapp"
        description={
          <>
            {subtitle} Senior Software Engineer at{" "}
            <Link href="https://wellhub.com/" target="_blank">
              Wellhub (formerly Gympass)
            </Link>{" "}
            by day, building{" "}
            <Link href="https://myfitplan.ai" target="_blank">
              myfitplan.ai
            </Link>{" "}
            by night.
          </>
        }
      />
      <div className="flex flex-col gap-8">
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
