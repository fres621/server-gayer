# Server Gayer

CSS snippet that turns Discord server icons into pride variants

# Contribute

You can submit new servers or suggest changes to existing ones by opening a PR with a valid entry in [servers.toml](servers.toml). You can validate the modified file running `pnpm test`, an entry should follow this TypeScript interface:

```ts
interface Server {
  id: string;
  url: string;
}
```

ID must be a Guild ID and url must be a **[Valid URL](#valid-urls)**

> [!NOTE]  
> Make sure your guild meets [the requirements](#valid-guilds)

# Valid URLs

An URL is valid when it's an HTTP(S) URL (e.g. `https://i.imgur.com/Yu6kZc5.jpg`), in which case only URLs from imgur.com will be accepted, or (recommended) an `icons/` URL (e.g. `icons/811255666990907402.png`), sub-directories aren't allowed and if you use an icons URL you must add the file in the `icons` directory in the same pull request as the TOML entry addition.

# Valid Guilds

A guild is eligible for being added if it has more than 10 000 members and Community is enabled.
