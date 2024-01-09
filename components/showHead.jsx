import { BigHead } from "@bigheads/core";
import { observer } from "mobx-react-lite";

const ShowHeads = observer(({ head, id }) => {
  return (
    <>
      <BigHead {...head.head} />
      <h1>name: {head.name}</h1>
      <h2>gess: {head.letters}</h2>
      <h2>points: {head.points}</h2>
    </>
  );
});

export default ShowHeads;
