# default-labels

> A GitHub App built with [Probot](https://github.com/probot/probot) that Applies default labels to new repositories

Default labels:
```
let labels = [
  { name: "Priority: Low", color: "DAF7A6", description: "A Issue With Low Priority" },
  { name: "Priority: Medium", color: "FFC300", description: "A Issue With Medium Priority" },
  { name: "Priority: High", color: "FF5733", description: "A Issue With High Priority" },
  { name: "Priority: Critical", color: "C70039", description: "A Issue With Critical Priority" }
]
```

## Setup

```sh
# Install dependencies
npm install

# Run typescript
npm run build

# Run the bot
npm start
```

## Contributing

If you have suggestions for how default-labels could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

## License

[ISC](LICENSE) © 2020 Patrick Delaney <pthomasdelaney@gmail.com>
