## gatsby-plugin-mdx, when configuration options are set, gatsby-config plugins section is ignored.

### When options are set:
```
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

### When options are not set
```
{
      resolve: `gatsby-plugin-mdx`,
}
```

Mdx nodes show up in GraphiQL, allFile has a single entry.