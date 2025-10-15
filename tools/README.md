# Development Tools
Work smarter not harder, using the tools within IDEs can speed up development and have quality of life when designing the next new thing.

## Google Chrome Development Tools
When coding web apps Google Chrome has a comprehensive suite of tools.

The Developer Tools are useful for running JavaScript code, editing HTML and CSS styles without having to refresh the page, and viewing performance data.

- [Debugging](https://developer.chrome.com/docs/devtools/javascript/)
- [Breakpoints](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)
- [DevTools Console](https://developer.chrome.com/docs/devtools/console/)

## JavaScript/TypeScript web full-stack
- [DuckDB](https://duckdb.org/) is a relational (table-oriented) DBMS that supports the Structured Query Language (SQL). DuckDB is an open-source, in-process SQL database engine designed for fast analytical queries on local data. Think of it as a “SQLite for analytics” — it runs entirely within your application (no separate server needed) and is optimized for OLAP-style workloads, such as aggregating, filtering, and joining large datasets. It supports standard SQL, integrates easily with tools like Python, R, and Pandas, and can query data directly from files like Parquet or CSV. This makes it ideal for data analysis, prototyping, and embedded analytics without the overhead of a full database system. You can use it inside a Node.js, Python, or even browser-based Next.js app to perform local analytics without setting up a full database server.
- [Next.js](https://nextjs.org/) – A full-stack React framework for building modern web applications. It supports both frontend and backend logic (via API routes or server actions), making it perfect for serving dashboards or analytical apps. You could connect Next.js to DuckDB for fast local data querying, or to MariaDB for persistent storage.
- [shadcn/ui](https://ui.shadcn.com/) – A library of beautifully designed, customizable React UI components built on top of Tailwind CSS. It’s used within Next.js apps to quickly build polished interfaces such as forms, tables, and dashboards for displaying analytics results.
- [Tailwind CSS](https://tailwindcss.com/) – A utility-first CSS framework that lets you design directly in your markup using composable style classes. Both Next.js and shadcn/ui use Tailwind to handle layout, spacing, and design in a highly efficient way without writing traditional CSS files.
- [MariaDB](https://mariadb.org/) – A relational database management system (a fork of MySQL) designed for reliability and scalability. It’s ideal for storing application data or historical records that you might later query or summarize with DuckDB for analytics. In a stack, MariaDB could serve as your persistent data store, Next.js as the application and API layer, DuckDB for analysis, and Tailwind + shadcn/ui for front-end presentation.

Where Flask focused on being a micro web server (serving API + templates),
Next.js is a full-stack web application layer — it handles everything from the first byte of HTML to client-side interactions, blurring the line between “frontend” and “backend.”

In other words:

> Flask served data to the browser; Next.js is the browser and the server, unified.

## Emmet Toolkit for HTML in VS Code
Emmet is a powerful abbreviation system built into VS Code that helps you write HTML (and CSS) faster with shorthand syntax. This guide outlines practical usage patterns, settings, and helpful extensions to make the most of Emmet in your workflow.

### Quick Start

| Abbreviation | Output |
|-------------|--------|
| `!` | Boilerplate HTML |
| `lorem` | Filler text |
| `div>ul>li*3` | Creates a `<div>` containing a list of 3 items |
| `Ctrl+Shift+P` → `Emmet: Wrap with Abbreviation` | Wrap selected text with Emmet abbreviation |

### Essential Emmet Patterns

#### IDs and Classes

```emmet
div#main.container.wrapper
```

#### Text Content Shortcut

```emmet
a.btn{Click Me}
```

#### Nesting with Siblings

```emmet
ul>li.item$*3
```

The $ gives you auto-incrementing numbers!

#### Complex Layouts in One Line

```emmet
header>nav>ul>li*3>a{Link $}
```

#### Form Quickstart

```emmet
form>label+input:email+button{Submit}
```

#### Emmet Wrap Power Use
Use `Wrap with Abbreviation` with a real abbreviation like:

```emmet
section.content>h2{Title}+p{Some text}+ul>li*3
```

#### Tips
- Use $ to insert auto-incrementing numbers in loops.
- Use {} to insert text content.

## Git

### Git Command Summaries
- `git add .` - Stages all modified and new files in the current directory for the next commit.
- `git commit -m "Message_here"` - Records the staged changes to the repository with a message
- `git push` - Uploads local commits to the remote repository (e.g., GitHub).
- `git branch <branch_name>` - Creates a new branch with the specified name.
- `git checkout <branch_name>` - Switches to the specified branch in your working directory.
- `git merge <branch_name>` - Merges changes from the specified branch into the current branch.

### Git Workflow
1. Create a feature branch
`git branch feature-xyz` → `git checkout feature-xyz`
(You work in isolation on a new feature or fix)

2. Make changes locally
(Edit code/files as needed)

3. Stage and commit changes
`git add .` → `git commit -m "Describe the changes"`
(Prepare and record changes in the local repo)

4. Push changes to remote
`git push`
(Share your branch with others / for backup / for pull request)

5. Merge to main branch (after review)
`git checkout main` → `git merge feature-xyz`
(Bring feature branch changes into the main project)

### Conventional Commits
https://www.conventionalcommits.org/

A standardized format for commit messages that makes it easier to understand the history of a project, automate versioning, and improve collaboration.

```swift
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

#### Commonly Used Types
- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Code style changes (formatting, missing semi-colons, etc.)
- refactor: Code changes that neither fix a bug nor add a feature
- test: Adding or updating tests
- chore: Maintenance tasks (build process, dependencies, etc.)

#### Scope
A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., `fix(parser):`

#### Description
A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short summary of the code changes, e.g., fix: array parsing issue when multiple spaces were contained in string.

#### Body
A longer commit body MAY be provided after the short description, providing additional contextual information about the code changes. The body MUST begin one blank line after the description.
A commit body is free-form and MAY consist of any number of newline separated paragraphs.

#### Footers
One or more footers MAY be provided one blank line after the body. Each footer MUST consist of a word token, followed by either a `:<space>` or `<space>#` separator, followed by a string value (this is inspired by the git trailer convention).
A footer’s token MUST use - in place of whitespace characters, e.g., `Acked-by` (this helps differentiate the footer section from a multi-paragraph body). An exception is made for `BREAKING CHANGE`, which MAY also be used as a token.
A footer’s value MAY contain spaces and newlines, and parsing MUST terminate when the next valid footer token/separator pair is observed.

#### Examples:
- `docs: correct spelling of CHANGELOG`
- `feat(login): add remember me checkbox`
- `fix(auth): handle token expiration correctly`
- `docs(readme): update setup instructions`
- `refactor(user): simplify role assignment logic`
- `feat!: send an email to the customer when a product is shipped`

- Multi-line
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123

#### Optional Enhancements:
- Breaking changes: Use BREAKING CHANGE: in the footer or ! after the type (e.g., feat!: ...)
- Issue references: Add Closes #123 or Fixes #456 in the footer to link commits to issues