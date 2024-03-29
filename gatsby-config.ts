import type { GatsbyConfig } from "gatsby";

import remarkToc from "remark-toc";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MDX Reproduction`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
  
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "mdxPages",
				path: "./pages/mdx/",
			},
		},
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [
            remarkToc
          ]
        }
      }
    }
  ],
};

export default config;
