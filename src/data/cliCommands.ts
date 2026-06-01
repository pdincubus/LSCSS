export type PackageManager = 'npm' | 'pnpm' | 'yarn';

export const packageManagers: PackageManager[] = ['npm', 'pnpm', 'yarn'];

export const defaultPackageManager: PackageManager = 'pnpm';

export const cliCommands = {
    browserslist: {
        npm: 'npx browserslist',
        pnpm: 'pnpm exec browserslist',
        yarn: 'yarn browserslist'
    },
    'run:build': {
        npm: 'npm run build',
        pnpm: 'pnpm run build',
        yarn: 'yarn build'
    },
    'run:dev': {
        npm: 'npm run dev',
        pnpm: 'pnpm run dev',
        yarn: 'yarn dev'
    },
    'run:preview': {
        npm: 'npm run preview',
        pnpm: 'pnpm run preview',
        yarn: 'yarn preview'
    }
} as const;

export type CliCommandKey = keyof typeof cliCommands;

export function getCliCommand(key: CliCommandKey, manager: PackageManager): string {
    return cliCommands[key][manager];
}
