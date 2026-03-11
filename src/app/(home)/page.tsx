import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/common/SocialLinks";
import MyfitplanLogo from "@/assets/icons/myfitplan-logo.svg";
import KommentoLogo from "@/assets/icons/k-logo-circle.svg";

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
          <p className="text-sm font-semibold text-stone-700">WHO AM I</p>
          <p className="font-light leading-relaxed text-stone-600">
            I&apos;m Adrian Knapp, and I&apos;ve been coding since I was 12, and
            by 17, I had already landed a senior developer role at a global
            company. Over the years, I&apos;ve shipped products across different
            industries, audiences, and challenges: from luxury fashion at{" "}
            <a
              href="https://www.armani.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Giorgio Armani
            </a>{" "}
            to{" "}
            <a
              href="https://tractian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Tractian
            </a>
            , one of the fastest-growing AI startups in industrial tech.{" "}
            <span className="font-medium">
              Today, I&apos;m a Senior Software Engineer at{" "}
              <a
                href="https://wellhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Wellhub
              </a>
              , the world&apos;s leading corporate wellbeing platform.
            </span>{" "}
            My passion lies in identifying real pain points and architecting
            solutions that break the mold.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-stone-700">PROJECTS</p>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-start">
            <Link
              href="https://myfitplan.ai"
              target="_blank"
              className="shrink-0"
            >
              <Image
                src={MyfitplanLogo}
                alt="myfitplan.ai logo"
                width={32}
                height={32}
                className="rounded-full mt-0.5"
              />
            </Link>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center justify-between">
                <Link
                  href="https://myfitplan.ai"
                  target="_blank"
                  className="font-medium text-stone-700 hover:text-stone-900 duration-default"
                >
                  myfitplan
                </Link>
                <Link
                  href="https://myfitplan.ai"
                  target="_blank"
                  className="text-sm text-stone-500 hover:text-stone-700 duration-default"
                >
                  myfitplan.ai
                </Link>
              </div>
              <p className="font-light text-stone-500">
                AI-powered fitness platform that generates personalized workout
                and nutrition plans tailored to your goals.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <Link
              href="https://kommento.com"
              target="_blank"
              className="shrink-0"
            >
              <Image
                src={KommentoLogo}
                alt="kommento.com logo"
                width={32}
                height={32}
                className="rounded-full mt-0.5"
              />
            </Link>
            <div className="flex flex-col gap-1 flex-1">
              <div className="flex items-center justify-between">
                <Link
                  href="https://kommento.com"
                  target="_blank"
                  className="font-medium text-stone-700 hover:text-stone-900 duration-default"
                >
                  Kommento
                </Link>
                <Link
                  href="https://kommento.com"
                  target="_blank"
                  className="text-sm text-stone-500 hover:text-stone-700 duration-default"
                >
                  kommento.com
                </Link>
              </div>
              <p className="font-light text-stone-500">
                Decision infrastructure for engineering teams. Collaborate on
                RFCs, review decision records, and build a permanent, searchable
                archive of every technical decision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-stone-700">FIND ME</p>
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
