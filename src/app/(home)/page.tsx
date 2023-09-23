import Credits from "@/components/common/Credits";
import Profile from "@/components/common/Profile";
import SocialLinks from "@/components/common/SocialLinks";
import Button from "@/components/ui/Button";

const Home = () => {
  return (
    <>
      <Profile
        imageUrl="https://avatars.githubusercontent.com/u/71047946?v=4"
        name="Adrian Knapp"
        description={
          <p>
            I&apos;m a software engineer with a passion for building things.
            I&apos;m currently working at{" "}
            <a href="https://www.athenahealth.com/">Trivod</a> as a Senior
            Software Engineer.
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
            name: "GitHub",
          },
          {
            icon: "email",
            url: "mailto:adrknapp@gmail.com",
            name: "Email",
          },
        ]}
      />
      <Credits />
    </>
  );
};

export default Home;
