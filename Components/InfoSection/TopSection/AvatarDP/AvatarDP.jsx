import { AvatarImg, AvatarRing } from "./AvatarDPStyles";

const AvatarDP = () => {
  const DPs = ["fist_bump", "laptop", "smile", "thumbs_up", "wink", "pray"];

  return (
    <>
      <AvatarRing>
        <AvatarImg src={`/DisplayPics/avatar_${DPs[Math.floor(Math.random() * DPs.length)]}.png`} />
      </AvatarRing>
    </>
  );
};

export default AvatarDP;
