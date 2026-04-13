import { ReactNode } from "react";

// MDX component — renders a pull-quote that drifts into the right
// margin on wide screens, inline on narrow screens.
// Usage in an MDX file:
//   <PullQuote>This becomes a side note.</PullQuote>
export default function PullQuote({ children }: { children: ReactNode }) {
  return <aside className="pull-quote">{children}</aside>;
}
