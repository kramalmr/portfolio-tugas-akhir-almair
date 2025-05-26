import { Navbar } from "../../Components/Nav";
import { TitleProgress, ProgressCard3, IDK } from "../../Components/Progress";
import data from "../../data/diniyyah.json";

export default function Diniyyah() {
    return (
      <div className="w-full h-fit px-6 lg:px-50 py-10 font-figtree">
        <Navbar />
        <TitleProgress title="Diniyyah" />
        <div className="flex flex-col lg:flex-row gap-16">
          {data.map((diniyyah, index) => (
            <ProgressCard3 key={index} diniyyah={diniyyah} />
          ))}
        </div>
        <IDK />
      </div>
    );
}