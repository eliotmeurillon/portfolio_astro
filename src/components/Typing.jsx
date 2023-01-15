import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "I love React",
        1000,
        "I love Vue",
        1000,
        "I love Angular",
        1000,
        "I love Svelte",
        1000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "3em", fontWeight: "800" }}
    />
  );
};

export default ExampleComponent;
