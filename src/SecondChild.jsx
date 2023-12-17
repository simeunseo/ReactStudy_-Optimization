import GrandChild from "./GrandChild";

function SecondChild({ onClick }) {
  return (
    <div onClick={onClick}>
      {Array.from({ length: 1000 }).map((_, idx) => (
        <GrandChild key={idx + 1} order={idx} />
      ))}
    </div>
  );
}

export default SecondChild;
