import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '54a028a3075c4da28be76b7cc272eb39',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  // rootNotionSpaceId: 'fde5ac74eea345278f004482710e1af3',

  // basic site info (required)
  name: 'LV技术派',
  domain: 'https://lv-xmn.notion.site/lv-xmn/LV-54a028a3075c4da28be76b7cc272eb39',
  author: 'LV',

  // open graph metadata (optional)
  description: 'LV技术派',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  // defaultPageIcon: 'https://transitivebullsh.it/page-icon.png',
  // defaultPageCover: 'https://transitivebullsh.it/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: 'About',
    //   pageId: '8d0062776d0c4afca96eb1ace93a7538'
    // },
    // {
    //   title: 'Contact',
    //   pageId: '9a7ddf2973444067bbc5ce0a4e0e0058'
    // }
  ]
})
