import { Suspense } from "react";

export function ServerComponent({ count, children }: any) {
  // Returns markup determined by the toggleState without holding state
  return (
    <>
      <p>This content comes from the server.</p>
    </>
  );
}
