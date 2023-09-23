import Credits from "@/components/common/Credits";
import Profile from "@/components/common/Profile";
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
      <div className="buttons-list">
        <Button icon="linkedin">LinkedIn</Button>
        <Button icon="instagram">Instagram</Button>
        <Button icon="github">GitHub</Button>
        <Button icon="whatsapp">WhatsApp</Button>
      </div>
      <Credits />
    </>
  );
};

export default Home;
