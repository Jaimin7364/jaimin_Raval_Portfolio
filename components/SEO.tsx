import Head from 'next/head';
import { useRouter } from 'next/router';

type SEOProps = {
  title: string;
  description?: string;
};

const SEO = ({ title, description }: SEOProps) => {
  const router = useRouter();
  const canonicalUrl = `https://www.jaiminraval.dev${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl.split('?')[0]} />
      <link rel="icon" type="image/png" href="/logo.png" />
    </Head>
  );
};

export default SEO;
