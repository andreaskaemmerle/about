# Sourcegraph website

This repository contains source code and documentation for the Sourcegraph marketing website, ([https://about.sourcegraph.com](https://about.sourcegraph.com)). The site is built using the [GatsbyJS](https://gatsbyjs.org) static site generator.

### Development

`npm install`

`npm start` - Start development server on http://localhost:8000. Watches files, rebuilds, and hot reloads if something changes.

### Building

Generate production build:

`npm run build`

### Serve

Generates a production build of the site and serves it locally on http://localhost:9000:

`npm run serve`

### Deploy

Pushing to master will trigger a deploy of the site. You can check the deploy status at https://buildkite.com/sourcegraph/website/. Our site is hosted on GitHub pages. When merging into master, a build gets triggered on Buildkite, which builds the site and pushes the built site to the `gh-pages` branch. The site gets deployed from this branch. This branch is protected, and can only be updated via Buildkite.

### @attfarhan to remove this notice on Oct 5.

NOTE: We are transitioning from Netlify to GitHub Pages. This transition should be very smooth, but if something goes wrong, we can switch back to Netlify by creating a Cloudflare A record with name = about, value = 104.198.14.52.

## Site structure

[GatsbyJS docs on site structure and React components](https://www.gatsbyjs.org/docs/building-with-components/)

Gatsby builds our site into the `/public` folder, which is the directory that gets pushed to the `gh-pages` branch and gets deployed.

- All website pages are in `/pages`. Adding a TypeScript file under `/pages` will create a page at a route equivalent to the filename (ex: `/pages/example.tsx` will create `https://about.sourcegraph.com/example`).

- `gatsby-config` contains all the [gatsby plugins](https://www.gatsbyjs.org/docs/plugins/) that are used in the site.

- `gatsby-node` handles all logic for generating blog and content pages.

- `html.tsx` wraps the entire Gatsby body. This generally does not need to be changed other than to add global elements to the site `<head>`.

- `/layouts` hold layouts that wrap all page components. `/layouts/index.tsx` is the default layout. You can specify the layout to use for generated pages in `gatsby-node.js`.

- `/components` holds reusabel React components.

- `/static` holds all static assets (images, gifs, scripts). These get moved into `/public` at build time. Because these are moved into `/public`, when calling these static items (for example, in blog posts or other js files), the import path will be at the root (ex: `/static/blog-images/FileTree.gif` is loaded by calling `/blog-images/FileTree.gif`).

## Documentation pages

Currently, all our documentation pages live in the `/data/docs` directory.

When writing documentation and website copy, please refer to the [styleguide](STYLEGUIDE.md).

Checklist for docs adding a docs page:

- [ ] Create Markdown file in `/data`, with the frontmatter filled out appropriately.
- [ ] If necessary, add your new page to the appropriate sidebar by adding a DocsSidebarItem to `ServerSidebar.tsx`, `DataCenterSidebar.tsx`, or `IntegrationsSidebar.tsx`.

To update the site configuration documentation, copy the [site.schema.json](https://sourcegraph.sgdev.org/github.com/sourcegraph/sourcegraph/-/blob/schema/site.schema.json) file from the sourcegraph/sourcegraph repository into [/utils/](/utils). The relevant markdown file will be generated as part of the build step during deployment. \*\*There is no need to run `npm run config-docs`\*\*.

Currently, the site settings docs ([/data/docs/server/config/settings.md](/data/docs/server/config/site-settings.md)) are manually created/edited.

```
cp $GOPATH/src/github.com/sourcegraph/sourcegraph/schema/site.schema.json utils/
```

**Important:** when creating hyperlinks to pages within https://about.sourcegraph.com, never link with the base URL https://about.sourcegraph.com.

Correct: \[example\]\(/example)

Wrong: \[example\]\(https://about.sourcegraph.com/example).

### Blog

All of our blog content lives in [Contentful](https://contentful.com). If you want access to Contentful to write a blog post, you can [find the credentials in 1Password](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/4qvohmn4fzhphbxi26xyei3poe).

Once in Contentful, click the "content" tab to view all our posts, and "add blog post" to create an entry. All fields are required. Posts will autosave as you write. Clicking the green "Publish" button will publish the entry to our site, so only do this when you're ready to ship the post!

For a regular blog post which should appear under https://about.sourcegraph.com/blog, you must add the 'blog' tag. If you want the post to appear under the /graphql blog add "graphql" as a tag. If you want a post to appear in the /go blog, add "gophercon" or "dotGo" as a tag.

To add images, gifs, or other media, add the file to the "media" tab and publish the file. The file will then be accessible when you click "insert media" in your content editor when you navigate back to your post.

**Important:** when creating hyperlinks to pages within https://about.sourcegraph.com, never link with the base URL https://about.sourcegraph.com.

Correct: \[example\]\(/example)

Wrong: \[example\]\(https://about.sourcegraph.com/example).

#### Previewing blog post drafts

If you want to preview a blog post as it would appear on our site post-publishing, you can do this by running `npm start` locally. Your local dev server will pull draft blogposts from Contentful, given they have all the required fields.

## Markdown pages

All markdown-based pages ([security](https://about.sourcegraph.com/security), [terms](https://about.sourcegraph.com/terms), [privacy](https://about.sourcegraph.com/privacy), etc.) live in the `/data` directory. These markdown documents are generated into pages that follow the `template/contentTemplate.tsx` template.
