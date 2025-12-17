import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

type ProfileProps = {
  imageUrl: string;
  name: string;
};

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
          Senior Software Engineer at{" "}
          <Link href="https://wellhub.com/" target="_blank" className="underline">
            Wellhub (Gympass)
          </Link>{" "}
          by day,{" "}
          <RoughNotation
            type="underline"
            strokeWidth={1}
            show
            multiline
            color="#10b981"
            animationDelay={1000}
            animationDuration={1000}
          >
            building{" "}
            <Link
              href="https://myfitplan.ai"
              className="inline underline"
              target="_blank"
            >
              <span>myfitplan.ai</span>
            </Link>{" "}
            by night.
          </RoughNotation>
        </p>
      </div>
    </div>
  );
};

export default Profile;
