import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-eclipse-saw",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiEclipseSaw {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M298.69 12.82c25.49 34.45 41 76.86 41 122.99 0 34.46-8.43 66.96-23.31 95.56-0.65 1.25-1.31 2.5-1.99 3.74-7.57 13.93-16.81 27.05-27.62 39.03-0.460.51-0.92 1.03-1.38 1.54-0.070.08-0.150.16-0.220.23-37.91 41.33-92.35 67.25-152.82 67.25-43.4 0-83.74-13.43-117.04-36.24v151.5c21.24 15.19 44.46 28.82 70.11 39.81-13.79-20.95-24.55-75.61-17.3-98.65 48.34 53.12 139.07 70.86 213.36 62.41-47.38-10.93-74.77-47.32-73.08-86.74 69.26 8.18 137.86 5.91 207.35-21.39-43.84 10.7-83.03-7.07-100.41-40.4 67.03-28.82 127.76-67.48 175.27-130.71-42.69 30.01-90.92 25.05-118.83-5.35 46.18-36.42 86.36-78.18 115.86-131.3-34.76 18.86-82.67 38.81-115.09 22.44 18.56-19.57 30.4-39.92 33.83-55.71H298.69zm19.01 92.58c-8.52 80.68-76.77 143.56-159.71 143.56-62.57 0-116.57-35.96-143.08-88.19v116.38c57.77 50.21 143.28 60.98 213.35 20.53C297.48 257.7 331 179.75 317.7 105.39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiEclipseSaw;
