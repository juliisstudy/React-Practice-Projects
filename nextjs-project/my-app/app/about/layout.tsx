export default function Aboutlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>about navbar</nav>
      <main>{children}</main>
    </>
  );
}
