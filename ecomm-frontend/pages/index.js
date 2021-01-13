import Head from 'next/head';
import styles from '../styles/Home.module.css';

import products from '../products.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {products.map((product) => (
        <div key={product.name} className={styles.product}>
          <div className={styles.product__Row}>
            <div className={styles.product__ColImg}>
              <img src='' alt='productimg' />
            </div>
            <div className={styles.product__Col}>
              {product.name} {product.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
