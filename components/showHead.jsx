import { BigHead } from "@bigheads/core";

export default function ShowHeads({ heads, head, id }) {
  return (
    <>
      <BigHead {...head.head} />
      <h1>name: {head.name}</h1>
      <h2>gess: {head.letters}</h2>
      <h2>points: {head.points}</h2>
      <button onClick={() => heads.deleteHead(id)}>Delete</button>
    </>
  );
}
