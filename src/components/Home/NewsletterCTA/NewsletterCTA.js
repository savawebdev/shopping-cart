import styles from "./NewsletterCTA.module.css";

const NewsletterCTA = () => {
  return (
    <div className={styles["newsletter-cta"]}>
      <h2>Sign up for our newsletter!</h2>
      <ul>
        <li>Best prices</li>
        <li>Be among the first to find out about our new offers</li>
        <li>Exclusive offers for subscribers</li>
      </ul>

      <div className={styles["newsletter-cta__actions"]}>
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          placeholder="Enter your e-mail"
        />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsletterCTA;
