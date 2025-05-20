import { Navbar } from "../../Components/Nav";
import { TitleProgress, ProgressCard2, IDK } from "../../Components/Progress";
import data from "../../data/language.json";

export default function Linguistics() {
    return (
      <div className="w-full h-fit px-6 lg:px-50 py-10 font-figtree">
        <Navbar />
        <TitleProgress title="Linguistics" />
        {data.map((language, index) => (
          <ProgressCard2 key={index} language={language} />
        ))}
        <IDK/>
      </div>
    );
}