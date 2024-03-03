import ApplicationLogo from "../../Global/ApplicationLogo";
import Image from "../../Global/Image";
import NavLink from "../../Global/NavLink";
import { Button } from "../../ui/button";

export default function GuestNavBar() {
  return (
    <div className="flex justify-between items-center h-14 border-b border-zinc-500 px-2">
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
          <Button
            variant="outline"
            size="icon"
            className="border-zinc-500 h-8 w-8"
          >
            <Image
              src="assets/images/icons/chart-pie-solid.svg"
              alt="Results"
              className="object-fit h-4 w-4"
            />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-zinc-500 h-8 w-8"
          >
            <Image
              src="assets/images/icons/question-solid.svg"
              alt="Help"
              className="object-fit h-4 w-4"
            />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-zinc-500 h-8 w-8"
          >
            <Image
              src="assets/images/icons/moon-solid.svg"
              alt="Dark Mode"
              className="object-fit h-4 w-4"
            />
          </Button>
        </div>
        <a href="/login">
          <Button variant="default" className="h-14 w-20 text-lg rounded-none">
            LOGIN
          </Button>
        </a>
      </div>
    </div>
  );
}
