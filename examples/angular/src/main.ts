// Angular JIT: the example consumes `@mal-icon/angular` straight from TypeScript
// source, so templates are compiled in the browser via `@angular/compiler`.
import "@angular/compiler";
import { provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [provideZonelessChangeDetection()],
}).catch((err) => console.error(err));
