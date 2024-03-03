import Item from "@/Components/User/Classify/item";

export default function ConvDetails() {
  return (
    <div className="space-y-2">
      <section className="space-y-2">
        <header className="text-lg">Convolutional Neural Networks</header>
        <article className="bg-zinc-300 text-zinc-900 rounded-lg p-4">
          <span className="font-semibold">Model Description</span>
          <p className="font-medium">
            Trained for 32 epochs, this CNN classifier consists of three
            convolutional layers and achieved training (98%) accuracy and
            testing (95%) accuracy utilizing BCELoss for optimized binary
            classification.
          </p>
        </article>
      </section>
      <section className="space-y-2">
        <header className="text-lg">Config</header>
        <div className="grid grid-cols-2 gap-2">
          <Item param="Optimizer" name="Adam" />
          <Item param="Learning Rate" name="0.0001" />
          <Item param="Epochs" name="32" />
          <Item param="Random Seed" name="42" />
          <Item param="Batch Size" name="50" />
          <Item param="Test Size" name="0.2" />
          <Item param="Architecture" name="Two Layers" />
        </div>
      </section>
      <section className="space-y-2">
        <header className="text-lg">Hyperparameters</header>
        <div className="grid grid-cols-2 gap-2">
          <Item param="Regularization" name="Dropout" />
          <Item param="Loss Function" name="BCELoss" />
          <Item param="Activation" name="ReLU" />
          <Item param="Pooling Type" name="Max Pooling" />
          <Item param="Pooling Size" name="2" />
          <Item param="Kernel Size" name="3" />
          <Item param="Stride" name="1" />
          <Item param="Padding" name="1" />
        </div>
      </section>
    </div>
  );
}
