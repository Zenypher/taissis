export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="flex lg:flex-row flex-col">{children}</div>
}
