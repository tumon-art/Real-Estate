import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./IsLoggedIn.module.scss";

export const IsLoggedIn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        {/* Signed in as {session.user.email} <br/> */}

        <button className={styles.btnZ} onClick={() => signOut()}>
          Sign Out
          <span className={styles.top}></span>
          <span className={styles.right}></span>
          <span className={styles.left}></span>
          <span className={styles.bottom}></span>
        </button>
      </div>
    );
  }
  return (
    <div>
      <button className={styles.btnZ} onClick={() => signIn()}>
        Sign in
        <span className={styles.top}></span>
        <span className={styles.right}></span>
        <span className={styles.left}></span>
        <span className={styles.bottom}></span>
      </button>
    </div>
  );
};
