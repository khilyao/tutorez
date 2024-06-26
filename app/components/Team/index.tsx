import { useLang } from "@/hooks/useLang";
import "./team.css";

const Team = () => {
  const { lang, t } = useLang();

  return (
    <section className="px-4 flex flex-col items-center" id="team">
      <h2 className="mb-7 lg:mb-12 lg:text-4xl text-center text-[#333] font-open-sans font-extrabold tracking-wide text-2xl leading-9">
        {t[lang].team.title}
      </h2>
      <ul className="flex flex-wrap justify-center gap-8">
        {t[lang].team.tutors.map(({ photo, name, bio, subject }, index) => (
          <li
            key={index}
            className="team-card max-w-[320px] bg-[#e9e1ff] ease-in-out lg:hover:bg-[#7e4cfa4f] shadow-lg rounded-lg overflow-hidden relative transition-all duration-300 transform"
          >
            <div className="inline-block overflow-hidden">
              <img
                src={`/${photo}`}
                alt={`${name}'s photo`}
                className="team-card-img  object-cove"
              />
            </div>
            <div className="p-3 px-6 md:p-6 text-center ">
              <h3 className="team-card-title text-base leading-4 font-poppins font-bold md:leading-5 md:text-xl mb-2 text-[#333]">
                {name}
              </h3>
              <p className="team-card-subject text-[#6b7280] text-base leading-4 font-poppins font-regular md:leading-5 md:text-base mb-2 md:mb-4">
                {subject}
              </p>
              <p className="team-card-bio text-sm leading-4 md:leading-5 md:text-base text-[#4b5563]">
                {bio}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
