/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Wavelink Official Website',
  author: 'Joe Cheng',
  description: 'Wavelink Official Website for Robotics',
  headerTitle: 'Wavelink',
  headerDescription: 'Make Robotics Easy and Fun',
  language: 'en-gb',
  //siteUrl: 'http://localhost:3000',       //Local
  siteUrl: 'https://wavelink.net',      //Production
  siteRepo: 'https://https://github.com/JoeExplains/ryanfitton-nextjs-2024',
  image: '/cdn-cgi/image/quality=75,format=webp/static/favicons/brandicon.png',
  socialBanner: '/cdn-cgi/image/quality=75,format=webp/static/img/banner_blue.png',
  email: 'ryan@ryanfitton.co.uk',
  facebook: 'https://www.facebook.com/rfitton',
  youtube: 'http://www.youtube.com/@Ryan.Fitton',
  github: 'https://github.com/ryanfitton/',
  x: 'https://x.com/ryanfitton',
  // twitter: 'https://www.twitter.com/ryanfitton',
  instagram: 'https://www.instagram.com/ryanfittonuk/',
  threads: 'https://www.threads.net/@ryanfittonuk',
  mastodon: 'https://mastodon.social/@ryanfitton',
  bluesky: 'https://bsky.app/profile/ryanfitton.bsky.social',
  linkedin: 'https://uk.linkedin.com/in/rfitton',
  buymeacoffee: 'https://buymeacoffee.com/ryanfitton',
  keybase: 'https://keybase.io/ryanfitton',
  //medium: 'https://www.medium.com/@ryanfitton',
  locale: 'en-GB',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-YLMTDYMQCC',
    },
  },
  ads: {
    googleAdsense: {
      googleAdsenseId: 'ca-pub-3978227379460513',
    },
  },
  comments: {
    provider: 'disqus', // supported providers: `giscus`, `utterances`, `disqus`
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: 'ryanfitton-co-uk',
    },
  },
  search: {
    provider: 'kbar', // `kbar` or `algolia`
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
