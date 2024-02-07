import Github from "./Icons/Github";
import FileCv from "./icons/FileCv";
import Gmail from "./icons/Gmail";
import LinkedIn from "./icons/LinkedIn";

const SocialPill = ({url,title}) => (

    <a
    className={`
          bg-white/5 
          border dark:border-white/10 border-gray-300 rounded-full
          flex justify-center items-center gap-x-2
          py-1 px-2 md:py-2 md:px-4
          text-xs md:text-base
          text-black/70 dark:text-white
          transition
          hover:scale-110 hover:bg-white/10
        `}
        href={title=="Gmail" ? `mailto:`+url : url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Visitar a ${title}`}
        aria-label={`Visitar a ${title}`}
    >
        {title=="Gmail" && <Gmail className="h-6 w-6" />}
        {title=="Linkedin" && <LinkedIn className="h-6 w-6" />}
        {title=="Github" && <Github className="h-6 w-6" />}
        {title=="Ver CV" && <FileCv className="h-6 w-6" /> } 
        {title=="Gmail" ? url : title} 
    </a>
);
export default SocialPill