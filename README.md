# Angular Atelier

Angular Atelier is a responsive, multi-page practice app for exploring Angular through small interactive examples. Each module focuses on a frontend concept and is available from the toggleable **Explore modules** side panel.

This is a learning project, not a production client-management system. Some modules use sample data, and the API examples call public services over the internet. For Learning, see the code.

## Practice modules

| Module | Route | What you can explore |
| --- | --- | --- |
| Variables | `/variables` | Component values, dates, objects, and arrays in templates. |
| Data Binding | `/databinding` | Interpolation, property binding, event binding, and two-way binding. |
| Control Flow | `/controlflow` | Conditional rendering with `@if`, repeated content with `@for`, and sample records. |
| Directives | `/directives` | Dynamic classes and styles using Angular directives. |
| Reactive Forms | `/reactiveform` | Reactive form controls and required-field validation. |
| Signal Basics | `/signalbasics` | Read and update signals containing strings, booleans, and arrays. |
| Signal Forms | `/signalforms` | Signal-backed fields and schema-based validation. |
| Get API | `/getapi` | Load and display user, photo, and product data from external APIs. |
| Client CRUD | `/clientcrud` | Create, list, edit, and delete client records through an external API. |
| Component Lifecycle | `/lifecycle` | Explore component initialization and Angular lifecycle hooks. |

The navigation drawer groups modules by topic, highlights the current route, and can be closed using its close button, the backdrop, or Escape.

## Technology

- Angular 22 standalone components and Angular Router
- Angular Signals and the `@if` / `@for` template control-flow syntax
- TypeScript
- Angular Forms, including Reactive Forms and Signal Forms
- Angular `HttpClient` for API examples
- Bootstrap 5 and custom responsive styles
- Vitest for unit tests

## Requirements

- Node.js
- npm

## Run locally

Clone the repository and open a terminal in the project directory. Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200). The development server watches the project and reloads the app as files change.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Start the Angular development server. |
| `npm run build` | Build the app into `dist/`. |
| `npm test` | Run the project unit tests. |
| `npm run watch` | Rebuild continuously using the development build configuration. |

## External API examples

The **Get API** and **Client CRUD** modules send requests to public services:

- JSONPlaceholder for user and photo examples
- FreeProjectAPI for product examples and client CRUD operations

These examples require an internet connection and depend on the availability and current behavior of those services. Client create, update, and delete actions send data to the external client API; do not use real or sensitive customer information.

## Project structure

```text
src/
├── app/
│   ├── components/
│   │   ├── client-crud/
│   │   ├── control-flow/
│   │   ├── databinding/
│   │   ├── directive-exp/
│   │   ├── get-apiex/
│   │   ├── lifecycle/
│   │   ├── not-found/
│   │   ├── reactive-form-ex/
│   │   ├── signal-forms/
│   │   ├── signalbasics/
│   │   └── variables/
│   ├── app.config.ts
│   ├── app.css
│   ├── app.html
│   ├── app.routes.ts
│   └── app.ts
├── styles.css
└── main.ts
```
