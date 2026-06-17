import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-trench-assault",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTrenchAssault {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M302.94 103.79c-23.99-0.11-49.66 9.4-71.41 31.1-48.33 50.45-60.16 116.39-37.38 194.63 21.8-78.99 53.34-198.24 136.47-154.49l-9.12 12.06c30.51 6.37 54.31 12.26 86.6 28.73-0.52-38.41-8.75-65.83-34.05-98.6l-9.85 13.19c-14.98-16.78-37.27-26.51-61.26-26.62zm-3.99 17.39c10.94-0.01 21.9 3.62 32.99 12.08l7.52-8.2c16.57 12.64 43.56 44.24 50.14 60.67-17.07-9.68-55.53-27.89-75.62-30.31l8.5-11.49c-54.85-22.2-116.85 54.45-126.02 134.73-8.79-44.91 29.85-120.1 54.25-137.83 16.29-11.84 32.25-19.64 48.24-19.66zm32.69 144.48v0.39l-0.29-0.1-54.8 156.5h-127.36C130.06 372.15 111.27 317.79 93.11 265.94c-31.17-0.21-48.54-0.28-66.42-0.270.11 66.1-0.09 114.68-0.09 174.83H493.63c-0.11-58.18-0.07-116.53-0.07-174.81v-0.03h-24.29l-6.08 7.47 9.51 32.19c-11.61-4.64-21.01-7.9-31.42-12.04l-27.78 18.97 1.79-33.52-17.03-13.06c-23.55-0.02-46.220.01-66.62 0zM26.61 468.01c-1.07 6.02-0.4 11.99 0 18.03h467.01v-18.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTrenchAssault;
