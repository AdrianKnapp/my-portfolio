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
        <Image src={imageUrl} alt="Profile" width={200} height={200} />
      </div>
      <div className="profile-name">{name}</div>
      <div className="profile-description">{description}</div>
    </div>
  );
};

export default Profile;
