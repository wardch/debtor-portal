import fixture from "../../fixtures/debtor-standard.json";

import { DebtorPortal } from "@/components/debtor-portal";

export default function Home() {
  return <DebtorPortal fixture={fixture} />;
}
