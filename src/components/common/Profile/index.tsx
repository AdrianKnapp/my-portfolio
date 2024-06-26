import Image from "next/image";

type ProfileProps = {
  imageUrl: string;
  name: string;
  description: JSX.Element;
};

const Profile = ({ imageUrl, name, description }: ProfileProps) => {
  return (
    <div data-cid="profile">
      <div className="profile-image">
        <Image src={imageUrl} alt="Adrian Knapp" width={200} height={200} />
      </div>
      <h1 className="profile-name">{name}</h1>
      <h2 className="profile-description">{description}</h2>
    </div>
  );
};

export default Profile;
