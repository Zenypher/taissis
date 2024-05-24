import { Filterbar } from "../../components/filter-bar";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-fill flex flex-col lg:flex-row">{children}</div>;
}
