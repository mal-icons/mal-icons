import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-boar-ensign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBoarEnsign {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M296.88 65.63c-8.51-0.06-17.240.34-26.13 1.22l5.31 79.220.6 8.98-17.96 1.2-0.6-8.98-5.23-78.03c-24.27 4.07-49.24 11.6-73.41 22.79l22.1 62.06 3.02 8.48-16.95 6.04-3.02-8.48-21.35-59.96c-20.72 11.21-40.57 25.23-58.53 42.17l33.34 35.42 6.17 6.55-13.1 12.33-6.17-6.55-32.91-34.97a259.95 259.95 0 0 0-37.29 51.83l36.44 10.01 8.68 2.38-4.77 17.36-8.68-2.38-39.92-10.97c-17.23 37.45-27.14 81.94-26.23 133.9l18.63 16.64 33.52-19.12c0.48 26.98-0.91 47.18-8.44 74-2.53 12.77 20.45 21.95 25.83 12.42l28.94-51.38 24.2 47.91c7.67 12.92 30.62 5.98 28.94-6.22l-9.57-69.26c26.49 2.38 69.87-3.7 82.37-23.71 11.06 16.91 27.19 25.47 46.26 30.66l-18.87 56.61c-2.87 11.79 13.26 26.7 24.95 16.55l44.28-50.45 48.48 50.05c9.16 8.97 28.72 2.95 25.33-5.21l-35.28-84.94c28.36 4.28 64.94 2.74 71.79-10.42l15.89-30.54c-24.83 3.03-49.39 4.15-72.26-7.2l4.47-23.34c33.13 1.88 46.29-6.9 65.49-19.86 22.84-15.43 32.65-62.59 22.84-62.57-36.960.08-59.42 12.22-91.81 24.83 8.55-26.06 22.6-56.03 20.36-79.95-2.51-26.8-18.56-46.98-42.87-59.96l-22.06 68.67-2.75 8.57-17.13-5.51 2.75-8.57 22.63-70.46c-17.63-6.32-38.16-9.65-60.25-9.82zm36.53 145.04c17.67 0 32 14.33 32 32 0 17.67-14.33 32-32 32-17.67 0-32-14.33-32-32 0-17.67 14.33-32 32-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBoarEnsign;
