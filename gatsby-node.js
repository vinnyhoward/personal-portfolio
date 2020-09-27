/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const portfolioMetaData = {
  title: `Hi! My name is Vincent`,
  captions: `I am a full-stack developer with a background in design (UI/UX, branding), with a deep passion for JavaScript, particularly in the React and Node ecosystems. While the web development field keeps on changing and developing, the landscape provides the challenge and fun I crave in creating, solving problems, and learning new technologies.`,
  }

  const socialMediaLinks = [
    { socialMediaPlatform: 'Github', url: 'https://github.com/vinnyhoward' },
    { socialMediaPlatform: 'LinkedIn', url: 'https://www.linkedin.com/in/vinnyhoward/' },
    { socialMediaPlatform: 'Instagram', url: 'https://www.instagram.com/vinnyvader/?hl=en' },
    { socialMediaPlatform: 'Facebook', url: 'https://www.facebook.com/VincentNguyenHoward/' },
  ]

  socialMediaLinks.forEach(socialData => {
    const node = {
      socialMediaPlatform: socialData.socialMediaPlatform,
      url: socialData.url,
      id: createNodeId(`socialDataId-${socialData.socialMediaPlatform}`),
      internal: {
        type: "socialMediaLinks",
        contentDigest: createContentDigest(socialData),
      },
    }
    actions.createNode(node)
  })

  const metaNode = {
      title: portfolioMetaData.title,
      captions: portfolioMetaData.captions,
      id: createNodeId(`portfolioData-${portfolioMetaData.title}`),
      internal: {
        type: "portfolioMetaData",
        contentDigest: createContentDigest(portfolioMetaData),
      },
    }

  actions.createNode(metaNode)
}