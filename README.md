## gatsby-plugin-mdx, when configuration options are set, gatsby-config config object is ignored.

### When options are set:
```
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
```

Mdx nodes do not show up in GraphiQL, allFile has zero entries.
Site title is set to null.

### When options are not set
```
{
      resolve: `gatsby-plugin-mdx`,
}
```

Mdx nodes show up in GraphiQL, allFile has a single entry.
Site title shows as normal. ("MDX Reproduction")


---


Query used to test:


```
query MyQuery {
  allFile {
    totalCount
  }
  site(siteMetadata: {}) {
    siteMetadata {
      title
    }
  }
}
```