# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Bitcoin Price Tracker Frontend is an Angular 20 application built with standalone components, using signals for state management and SCSS for styling. The project uses pnpm as its package manager.

## Key Technologies

- **Framework**: Angular 20.3.0
- **Language**: TypeScript 5.9.2 with strict mode enabled
- **Styling**: SCSS
- **Testing**: Karma + Jasmine
- **Package Manager**: pnpm (configured in angular.json)

## Common Commands

### Development
```powershell
pnpm start              # Start dev server at http://localhost:4200
pnpm run ng serve       # Alternative to start dev server
pnpm run watch          # Build in watch mode with development configuration
```

### Building
```powershell
pnpm run build          # Production build (outputs to dist/)
pnpm run ng build       # Alternative build command
```

### Testing
```powershell
pnpm test               # Run unit tests with Karma
pnpm run ng test        # Alternative test command
```

### Code Generation
```powershell
pnpm run ng generate component component-name    # Generate a new component
pnpm run ng generate service service-name        # Generate a new service
pnpm run ng generate --help                      # List all available schematics
```

## Project Architecture

### Application Bootstrap
- **Entry Point**: `src/main.ts` bootstraps the root `App` component
- **Configuration**: `src/app/app.config.ts` provides application-level configuration including:
  - Zone change detection with event coalescing
  - Router configuration
  - Global error listeners

### Routing
- Routes are defined in `src/app/app.routes.ts`
- Currently configured with an empty routes array (ready for feature routes)

### Component Structure
- Uses **standalone components** (default in Angular 20)
- Root component is `App` (not `AppComponent`) located in `src/app/app.ts`
- Components follow naming convention: `app.ts`, `app.html`, `app.scss` (no `.component` suffix)

## Angular & TypeScript Standards

### Strict TypeScript Configuration
- Strict mode is enabled with additional checks:
  - `noImplicitOverride: true`
  - `noPropertyAccessFromIndexSignature: true`
  - `noImplicitReturns: true`
  - `noFallthroughCasesInSwitch: true`
- Angular strict templates are enabled
- Avoid `any` type; use `unknown` when type is uncertain

### Component Best Practices
- **Always use standalone components** (do NOT set `standalone: true` explicitly - it's the default)
- Use signals for state management: `signal()`, `computed()`, `effect()`
- Use `input()` and `output()` functions instead of `@Input()` and `@Output()` decorators
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in `@Component` decorator
- Do NOT use `@HostBinding` and `@HostListener` - use the `host` object in `@Component`/`@Directive` decorator instead
- Keep components focused on single responsibility

### Template Standards
- Use native control flow syntax: `@if`, `@for`, `@switch` (NOT `*ngIf`, `*ngFor`, `*ngSwitch`)
- Do NOT use `ngClass` - use `class` bindings instead
- Do NOT use `ngStyle` - use `style` bindings instead
- Use `async` pipe to handle observables
- Keep templates simple; avoid complex logic

### State Management
- Use signals for local component state
- Use `computed()` for derived state
- Do NOT use `mutate` on signals - use `update()` or `set()` instead
- Keep state transformations pure and predictable

### Services
- Use `providedIn: 'root'` for singleton services
- Use `inject()` function instead of constructor injection
- Design services around single responsibility

### Forms
- Prefer Reactive forms over Template-driven forms

### Images
- Use `NgOptimizedImage` for all static images
- Note: `NgOptimizedImage` does not work for inline base64 images

### Routing
- Implement lazy loading for feature routes

## Build Configuration

### Bundle Size Limits
- Initial bundle: warning at 500kB, error at 1MB
- Component styles: warning at 4kB, error at 8kB

### Style Language
- Inline style language: SCSS
- Global styles: `src/styles.scss`
- Component prefix: `app`

## Code Formatting
Prettier is configured with:
- Print width: 100
- Single quotes
- Angular parser for HTML files

## Testing
- Test framework: Jasmine 5.9.0 with Karma 6.4.0
- Test files follow `*.spec.ts` naming convention
- Test configuration: `tsconfig.spec.json`
