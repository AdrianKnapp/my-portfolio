import SocialLinks from "@/components/common/SocialLinks";

const Home = () => {
  return (
    <div className="flex max-w-5xl mx-auto flex-col w-full gap-8">
      <div className="flex flex-1 flex-col gap-4 items-center justify-center">
        {/* <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/u/71047946?v=4"
            alt="Adrian Knapp"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="flex gap-2 flex-col">
          <p className="text-xs font-semibold text-stone-700">WHO AM I</p>
          <p className="font-light text-sm text-stone-600">
            I&apos;m Adrian Knapp, and I&apos;ve been coding since I was 12, and
            by 17, I had already landed a senior developer role at a global
            company. Over the years, I&apos;ve shipped products across different
            industries, audiences, and challenges: from luxury fashion at
            Giorgio Armani to Tractian, one of the fastest-growing AI startups
            in industrial tech.{" "}
            <span className="font-medium">
              Today, I&apos;m a Senior Software Engineer at Wellhub, the
              world&apos;s leading corporate wellbeing platform.
            </span>{" "}
            My passion lies in identifying real pain points and architecting
            solutions that break the mold.
          </p>
        </div>
      </div>
      <div className="flex max-w-1/3 flex-col gap-2">
        <p className="text-xs font-semibold text-stone-700">FIND ME</p>
        <SocialLinks
          links={[
            {
              icon: "github",
              url: "https://github.com/AdrianKnapp",
              name: "GitHub",
            },
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
