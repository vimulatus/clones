# Clones
An nx monorepo consisting of clones of popular webapps built with Angular.

- [ ] Medium
- [ ] Paytm

# Setup 
Installation with `npm install`

# Commit Message Guidelines
The commit format: 
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

The **header** cannot be longer than 50 characters and the **body** cannot be longer than 100 characters. 

The **footer** should contain a **closing reference to an issue** if any.

## Type
Must be one of the following:
- **build**: Changes that affect the build system or external dependencies (example scopes: npm)
- **ci**: Changes to CI configuration files and scripts (example scopes: Circle)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colos, etc)
- **test**: Adding missing tests or correcting existing tests

## Scope
The scope should be the name of the app or lib affected (eg. shared-ui, shared-utils, medium, etc)

## Subject
The subject contains a succint description of the change:
- use the imperative, present tense: "change" not "changes" nor "changed"
- don't capitalise the first letter
- no dot(.) at the end

## Body
Just as in the **subject**, use the imperative, present tense: "change" not "changes" nor "changed". The body should include the motivation for the change and contrast this with previous behaviour.

## Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.