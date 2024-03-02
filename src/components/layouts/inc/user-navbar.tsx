import React from "react";
import ApplicationLogo from "../../global-components/application-logo";
import Image from "../../global-components/image";
import NavLink from "../../global-components/navlink";
import { Button } from "../../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserNavBar() {
  return (
    <div className="fixed top-0 left-0 flex justify-between items-center h-14 border-b border-zinc-500 bg-white px-2 min-w-full">
      <div className="flex gap-8 items-center">
        <ApplicationLogo />
        <div className="hidden md:flex gap-8 text-sm">
          <NavLink href="" title="HOME" />
          <NavLink href="" title="ALGORITHMS" />
          <NavLink href="" title="CLASSIFY" />
          <NavLink href="" title="DATASETS" />
          <NavLink href="" title="HELP" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-3 items-center">
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
        <div className="h-14 px-2 py-3 flex items-center border-x border-zinc-500 cursor-pointer">
          <Avatar>
            <AvatarImage src="assets/images/cat.jpg" />
            <AvatarFallback>GD</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex md:hidden items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="border-zinc-500 h-8 w-8"
          >
            <Image
              src="assets/images/icons/bars-solid.svg"
              alt="Results"
              className="object-fit h-4 w-4"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
