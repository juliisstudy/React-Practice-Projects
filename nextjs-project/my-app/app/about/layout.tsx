import styles from "./styles.module.css";

export default function Aboutlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>about navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
