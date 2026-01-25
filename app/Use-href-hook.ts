import { usePathname } from "next/navigation";

export function useHrefTo() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (id: string) => (onHome ? `#${id}` : `/#${id}`);
}
