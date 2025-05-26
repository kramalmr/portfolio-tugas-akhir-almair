import { Navbar } from "../../Components/Nav";
import { TitleProgress, ProgressCard, IDK } from "../../Components/Progress";
import data from "../../data/extracurricular.json";

export default function ExtraActivities() {
  return (
    <div className="w-full h-fit px-6 lg:px-50 py-10 font-figtree">
      <Navbar />
      <TitleProgress title="Extracurricular Activities" />
      {data.map((extracurricular, index) => (
        <ProgressCard key={index} extracurricular={extracurricular} />
      ))}
      <IDK />
    </div>
  );
}
