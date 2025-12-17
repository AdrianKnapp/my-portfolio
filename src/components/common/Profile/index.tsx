import Image from "next/image";

type ProfileProps = {
  imageUrl: string;
  name: string;
};

// https://gooey-react.netlify.app/

const Profile = ({ imageUrl, name }: ProfileProps) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt="Adrian Knapp"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-1 flex-col items-center">
        <h1 className="text-lg font-semibold text-black-dark">{name}</h1>
        <p className="text-sm text-center text-black-light font-light">
          I&apos;ve been coding since I was 12, and by 17, I had already landed
          a senior developer role at a global company. Over the years, I&apos;ve
          shipped products across different industries, audiences, and
          challenges: from luxury fashion at Giorgio Armani to Tractian, one of
          the fastest-growing AI startups in industrial tech. Today, I&apos;m a
          Senior Software Engineer at Wellhub, the world&apos;s leading
          corporate wellbeing platform. My passion lies in identifying real pain
          points and architecting solutions that break the mold.
        </p>
      </div>
    </div>
  );
};

export default Profile;
