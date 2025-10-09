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