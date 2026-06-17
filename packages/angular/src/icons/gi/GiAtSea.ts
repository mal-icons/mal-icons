import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-at-sea",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAtSea {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256.44 14.19c-132.32 0-239.78 107.46-239.78 239.78S124.12 493.75 256.44 493.75c132.32 0 239.78-107.46 239.78-239.78S388.76 14.19 256.44 14.19zm0 17.91c122.65 0 221.88 99.22 221.88 221.88 0 4.52-0.14 9.01-0.41 13.47-30.94 8.15-68.07-14.22-85.41-43.84-47.56 66.05-89.74 73.19-129.16-1.56-36.94 67.55-104.17 73.16-137.12 20.06-33.72 45.98-56.65 52.06-91.06 28.56-0.41-5.51-0.62-11.08-0.62-16.69 0-122.65 99.25-221.88 221.91-221.88zm138.5 245.22c20.21 40.23 58.6 27.54 81.97 1.56-4.73 42.46-21.39 81.25-46.59 113-33.74 18.58-58.87 7.2-89.56-45.62-41.88 74.75-109.81 67.61-160.34 1.56-17.55 28.22-62.92 49.84-97.28 44.78-21.88-27.33-37.44-59.94-44.44-95.66 23.49 22.11 63.89 29.18 84.41-3.62 32.37 48.66 100.4 51.54 140.25-5.06 23.83 34.05 85.97 64.59 131.59-10.94zM177.81 401.5c48.48 75.53 137.62 45.02 162.94 10.97 17.2 19.63 37.55 20.8 57.69 12.06-38.46 32.05-87.96 51.35-142 51.35-54.69 0-104.71-19.76-143.37-52.5 24.17 8.21 50.55 4.72 64.75-21.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAtSea;
