import styles from "./style.module.css";

interface SkeletonProps {
  classes: string;
}

const SkeletonPost: React.FC<SkeletonProps> = ({ classes }) => {
  const classNames = `${styles.skeleton} ${classes} ${styles["animate-pulse"]}`;
  return <div className={classNames}></div>;
};

const SkeletonPage = () => {
  return (
    <div className={styles.frame} style={{ width: "15rem" }}>
      <SkeletonPost classes={styles.title + " " + styles["width-50"]} />
    </div>
  );
};

export default SkeletonPage;
