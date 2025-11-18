import { subtitle } from "@/app/(home)/copy";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

type ProfileProps = {
  imageUrl: string;
  name: string;
};

const Profile = ({ imageUrl, name }: ProfileProps) => {
  return (
    <div data-cid="profile">
      <div className="profile-image">
        <Image src={imageUrl} alt="Adrian Knapp" width={400} height={400} />
      </div>
      <div className="flex gap-1 flex-col items-center">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-description">
          Senior Software Engineer at{" "}
          <Link href="https://wellhub.com/" target="_blank">
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
              className="inline "
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
