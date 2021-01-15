import Head from 'next/head';
import products from '../../products.json';
import { fromImageToUrl } from '../../utils/urls';
import { twoDecimals } from '../../utils/format';
const product = products[0];

const Product = () => {
  return (
    <div>
      {/* using next.js head to create seo */}
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}
        {product.meta_description && (
          <meta name='description' content={product.meta_description} />
        )}
      </Head>
      <h3>{product.name}</h3>
      <img src={fromImageToUrl(product.image)} />
      <h3>{product.name}</h3>
      <p>${twoDecimals(product.price)}</p>
      <p>{product.content}</p>
    </div>
  );
};

export default Product;
