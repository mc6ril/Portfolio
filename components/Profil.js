import Image from "next/image";
export default function Profil() {
  return (
    <div className="home-header">
      <h1 className="title">Développeur FullStack JS</h1>
      <p>Développeur freelance web et mobile</p>
      <div className="profil-picture">
        <Image
          src="/profil.png"
          alt="my-profile"
          width="250"
          height="250"
          quality={100}
        />
      </div>
    </div>
  );
}
