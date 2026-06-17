import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-knife-thrust",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiKnifeThrust {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M47.69 19.16c-0.380-0.750.02-1.130.03-6.040.25-12.25 2.82-17.28 7.84-10.06 10.06-10.3 24.92-1.72 33.5 3.94 3.94 9.21 6.03 14.72 6.16l3.06-3.09L67.5 41.44l1.41-1.41c-0.12-5.51-2.22-10.78-6.16-14.72-4.02-4.02-9.42-6.11-15.06-6.16zm28.28 40.25L63.06 72.31c13.65 33.24 37.17 56.27 67.44 73.72l18.75-18.75C130.39 97.32 105.99 74.1 75.97 59.41zm129.34 38.25L99.91 203.09l23.84 23.84c29.78-40.62 65.42-75.33 105.5-105.34l-23.94-23.94zm12.81 56.41c-22.47 18.7-43.18 39.08-61.87 61.44 34.05 43.91 76.28 82.78 122.41 112.38-20.86 1.7-40.4 1.28-58.56-1.28 34.15 24.85 71.23 45.65 110.25 61.16-28.24 2.65-54.58 2.25-78.97-1.19 72.54 52.77 155.47 91.19 243.06 107.47-20.59-94.73-58.11-178.44-109.84-249.09 3.57 24.95 4.54 52.33 2.47 82.31-16.07-41.13-36.74-78.82-61.56-112.72 2.65 18.57 3.49 38.85 2.22 60.94-29.64-47.29-66.48-88.24-109.59-121.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiKnifeThrust;
