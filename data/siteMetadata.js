/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'RosByte Official Website',
  author: 'Joe Cheng',
  description: 'RosByte Official Website for Robotics',
  headerTitle: 'RosByte',
  headerDescription: 'Make Robotics Easy and Fun',
  language: 'en-gb',
  //siteUrl: 'http://localhost:3000',       //Local
  siteUrl: 'https://waveseek.net',      //Production
  siteRepo: 'https://https://github.com/JoeExplains/ryanfitton-nextjs-2024',
  image: '/static/favicons/brandicon.png',
  socialBanner: '/static/img/banner_blue.png',
  email: 'waveseek@gmail.com',
  facebook: 'https://www.facebook.com/waveseek',
  youtube: 'http://www.youtube.com/@waveseek',
  github: 'https://github.com/waveseek/',
  x: 'https://x.com/waveseek',
  // twitter: 'https://www.twitter.com/ryanfitton',
  instagram: 'https://www.instagram.com/waveseek/',
  // threads: 'https://www.threads.net/@ryanfittonuk',
  // mastodon: 'https://mastodon.social/@ryanfitton',
  // bluesky: 'https://bsky.app/profile/ryanfitton.bsky.social',
  linkedin: 'https://uk.linkedin.com/in/waveseek',
  // buymeacoffee: 'https://buymeacoffee.com/ryanfitton',
  // keybase: 'https://keybase.io/ryanfitton',
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
      shortname: 'waveseek',
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
