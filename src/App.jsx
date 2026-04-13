import { useState } from "react";

import Intro from "./pages/Intro";
import Memory from "./pages/Memory";
import Meaning from "./pages/Meaning";
import Final from "./pages/Final";

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && <Intro next={() => setStep(1)} />}
      {step === 1 && <Memory next={() => setStep(2)} />}
      {step === 2 && <Meaning next={() => setStep(3)} />}
      {step === 3 && <Final />}
    </>
  );
}