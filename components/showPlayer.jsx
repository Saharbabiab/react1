import { BigHead } from "@bigheads/core";

export default function ShowPlayer({ head }) {
  return (
    <>
      <BigHead {...head.head} />
      <h1>name: {head.name}</h1>
      <h1>gess: {head.letters}</h1>
      <h1>points: {head.points}</h1>
    </>
  );
}
