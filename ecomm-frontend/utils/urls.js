export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

/**
 * Given an image return the URL
 * Works for local and deployed strapis
 * @param {any} image
 */

export const fromImageToUrl = (image) => {
  if (!image) {
    return '/vercel.svg';
  }

  //checking to see if / is the start so it would be a relative path
  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image.url}`;
  }

  //default case
  return image.url;
};
