# Release Process

This project uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for automatic versioning and tag creation.

## Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This format is used to automatically determine the version bump.

The commit message should be structured as follows:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Common types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

## Local Development

For convenience, you can use the `bun commit` script to create commits with the correct format:

```bash
git add .
bun commit
```

## Automatic Releases

When commits are pushed to the `main` branch, the CI will automatically:
1. Analyze commit messages
2. Determine the next version number
3. Update the package.json version
4. Create a Git tag
5. The Git tag then triggers the Docker build workflow

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release) 