import UserLayout from "@/components/layouts/user-layout";
import InputImage from "./input-image";
import ConvolutionalNetworks from "./conv-networks";
import SupportVectorMachines from "./support-machines";

export default function Classify() {
  return (
    <UserLayout>
      <div className="p-8 flex gap-32 justify-between">
        <main className="flex-none h-fit w-4/12 rounded-lg bg-white border border-zinc-300">
          <InputImage />
        </main>
        <aside className="flex-1 grid grid-cols-1 space-y-4">
          <ConvolutionalNetworks />
          <SupportVectorMachines />
        </aside>
      </div>
    </UserLayout>
  );
}
