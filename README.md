# Storybook by Kreftforeningen

Component library documentation and showcase built with Storybook.

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm storybook
```

Runs Storybook in development mode at [http://localhost:6006](http://localhost:6006)

### Build

```bash
pnpm build-storybook
```

Builds a static version of Storybook for production deployment.

## Components

This Storybook documents the Kreftforeningen component library (`@kreftforeningen/web-react`), including:

- **Base Components**: Colors, Fonts, Headings, Text
- **UI Components**: Buttons, Cards, Forms, Navigation, Dialogs, and more
- **Custom Components**: Header, Footer, Banner, Person, Timeline, Infographic, etc.

## Project Structure

```
src/stories/
├── base/           # Base design tokens and typography
├── components/     # Component stories
└── assets/         # Images and assets used in stories
```

## Contributing

When adding new component stories:

1. Create a new `.stories.tsx` file in `src/stories/components/`
2. Add `displayName` for components that need it
3. Include `parameters: docs: source code` for each story to show code examples
4. Follow existing story patterns for consistency
