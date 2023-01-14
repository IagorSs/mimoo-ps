import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  globalSetup: './config/jest.ts',
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
}

export default jestConfig
