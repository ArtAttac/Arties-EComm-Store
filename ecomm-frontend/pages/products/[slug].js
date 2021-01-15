import Head from 'next/head';
import { fromImageToUrl, API_URL } from '../../utils/urls';
import { twoDecimals } from '../../utils/format';

const Product = ({ product }) => {
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

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();
  return {
    props: {
      product: found[0], //because the API response for filters is an array
    },
  };
}

export async function getStaticPaths() {
  //retreive all possible paths
  const products_res = await fetch(`${API_URL}/products/`);
  const products = await products_res.json();

  //return them to nextjs context
  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false, //tells nextjs to show a 404 if param is not a match
  };
}

export default Product;
