import UserLayout from "@/Components/Layouts/UserLayout";
import InputImage from "./InputImage";
import ConvolutionalNetworks from "./ConvNetworks";
import SupportVectorMachines from "./SuppVecMachines";

export default function Classify() {
  return (
    <UserLayout>
      <div className="p-8 flex flex-col md:flex-row gap-8 justify-between">
        <main className="flex-1 lg:flex-none h-fit lg:w-96 rounded-lg bg-white border border-zinc-300">
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
