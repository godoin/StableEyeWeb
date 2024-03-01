import ApplicationLogo from "../global-components/application-logo";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GuestNavBar() {
  return (
    <div className="flex justify-between items-center h-16 border-b border-zinc-500">
      <div className="flex gap-6 items-center">
        <ApplicationLogo />
        <div className="flex gap-6 text-sm">
          <a href="" className="font-bold tracking-wider hover:text-violet-700">
            HOME
          </a>
          <a href="" className="font-bold tracking-wider hover:text-violet-700">
            ALGORITHMS
          </a>
          <a href="" className="font-bold tracking-wider hover:text-violet-700">
            CLASSIFY
          </a>
          <a href="" className="font-bold tracking-wider hover:text-violet-700">
            DATASETS
          </a>
          <a href="" className="font-bold tracking-wider hover:text-violet-700">
            HELP
          </a>
        </div>
      </div>
      <div className="">
        <Button variant="outline" size="icon">
        </Button>
      </div>
    </div>
  );
}
