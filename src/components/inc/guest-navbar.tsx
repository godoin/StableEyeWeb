import ApplicationLogo from "../global-components/application-logo";
import Image from "../global-components/image";
import NavLink from "../global-components/navlink";
import { Button } from "../ui/button";

export default function GuestNavBar() {
  return (
    <div className="flex justify-between items-center h-16 border-b border-zinc-500 px-2">
      <div className="flex gap-8 items-center">
        <ApplicationLogo />
        <div className="flex gap-8 text-sm">
          <NavLink href="" title="HOME" />
          <NavLink href="" title="ALGORITHMS" />
          <NavLink href="" title="CLASSIFY" />
          <NavLink href="" title="DATASETS" />
          <NavLink href="" title="HELP" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4 items-center">
          <Button variant="outline" size="icon">
            <Image
              src="assets/images/icons/chart-pie-solid.svg"
              alt="Results"
              className="object-fit h-5 w-5"
            />
          </Button>
          <Button variant="outline" size="icon">
            <Image
              src="assets/images/icons/question-solid.svg"
              alt="Help"
              className="object-fit h-5 w-5"
            />
          </Button>
          <Button variant="outline" size="icon">
            <Image
              src="assets/images/icons/moon-solid.svg"
              alt="Dark Mode"
              className="object-fit h-5 w-5"
            />
          </Button>
        </div>
        <a href="/login">
          <Button variant="default" className="h-16 w-20 text-lg rounded-none">
            LOGIN
          </Button>
        </a>
      </div>
    </div>
  );
}
