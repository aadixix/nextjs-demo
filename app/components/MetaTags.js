import Head from "next/head";

const MetaTags = ({
  title,
  description,
  keywords,
  author,
  url,
  image,
  imageWidth = "750",
  imageHeight = "422",
  siteName = "RuralVoice",
  locale = "en_US",
  type = "article",
  publishedTime,
  modifiedTime,
  tags = [],
  twitterSite = "@RuralVoice",
  twitterCreator = "@Ajeet Singh",
  canonical,
  ampUrl,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="article:author" content={author} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      <meta property="fb:app_id" content="104841141528181" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {canonical && <link rel="canonical" href={canonical} />}
      {ampUrl && <link rel="amphtml" href={ampUrl} />}
      <link rel="shortcut icon" type="image/png" href={image} />
    </Head>
  );
};

export default MetaTags;
