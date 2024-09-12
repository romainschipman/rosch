import { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-docs',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: { },
  },
  staticDirs: ['../public'],
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;