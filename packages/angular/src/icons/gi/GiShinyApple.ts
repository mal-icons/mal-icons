import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-shiny-apple",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiShinyApple {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M255.56 19.75c-13.31 57.82-16.62 100.69-13.91 156.94l18.810.03c3.31-49.62 18.56-88.62 45.87-133-4.86-9.13-13.46-14.96-23.81-18.78-8.91-3.29-18.82-4.77-26.97-5.19zm98.75 94.16c-9.070.13-18.42 1.2-28 3.31-13.76 3.03-27.18 7.95-39.97 14.56-3.9 14.62-6.35 29.84-7.41 46.6 1.25-0.22 2.51-0.43 3.75-0.69 24.97-5.13 43.29-17.24 52.34-32.25-0.3 19.94-25.12 41.18-56.81 49.97-2.520.7-5.09 1.34-7.69 1.87-44.29 9.11-85.27-8.31-99.84-35.34-4.37-8.1-5.18-16.44-3.09-24.34 9.83 17.98 30.63 31.53 55.25 38.16-0.75-16.25-0.97-31.51-0.62-46.41-11-4.88-22.38-8.55-33.97-10.87-11.18-2.25-22.04-3.41-32.09-3.06-71.76 2.5-132.96 64.89-131.78 154.69C25.73 373.26 101.85 472.42 190 490.12c11.18 2.25 24.93 3.42 37.22 2.28 12.28-1.14 22.78-4.76 28.41-10.16l5.97-5.72 6.41 5.25c5.38 4.43 16.54 8.05 29.13 9.22 12.58 1.17 26.510.2 37.34-2.19 87.53-19.26 153.05-119.08 151.69-222.72-0.68-51.61-19.35-93.61-48.22-120.22-21.65-19.96-48.95-31.51-79.75-31.97-1.28-0.02-2.58-0.02-3.87 0zm49.91 41.13c53.69 32.48 75.36 115.23 37.09 200.63-30.48 68.02-93.18 121.26-140.84 118.75C411.3 407.96 458.19 271.06 404.22 155.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiShinyApple;
