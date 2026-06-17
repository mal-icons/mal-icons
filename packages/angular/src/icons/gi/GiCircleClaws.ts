import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-circle-claws",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCircleClaws {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M229.83 24.17C169.09 23.87 108.82 50.45 68.12 101.72c-70.4 88.68-55.58 217.63 33.1 288.03 1.39 1.1 2.82 2.19 4.26 3.270.290.30.570.620.860.92-0.12-0.18-0.23-0.35-0.35-0.53 5.06 3.74 10.36 7.29 15.5 10.48-15.07-15.15-27.36-32.23-36.78-50.52-26.06-64.27-15.24-129.28 32.96-161.24 58.43-38.76 151.12-15.18 215.06 51.68-3.94-5.9-8.41-12.11-13.02-17.83-63.68-79.23-166.37-109.6-229.36-67.82-1.070.71-2.12 1.44-3.16 2.19 5.43-9.82 11.74-19.33 18.95-28.42 65.31-82.27 181.15-100.69 268.36-46.76-5.63-5.66-11.95-11.45-18.36-16.54-37.41-29.7-81.99-44.23-126.32-44.45zm160.62 82.28c45.1 42.61 67.29 102.17 63.89 161.22-5.6 29.51-20.3 57.6-44.16 80.17-58.44 55.31-151.12 57.98-215.06 9.24 3.94 4.78 8.41 9.73 13.02 14.15 49.38 47.45 122.2 58.87 181.79 33.82-65.28 61.2-164.12 72.98-242.47 27.83 5.8 5.48 12.3 11.08 18.86 15.96 90.82 67.61 219.26 48.8 286.87-42.03 67.61-90.82 48.8-219.25-42.03-286.87-6.56-4.89-13.78-9.5-20.7-13.49z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCircleClaws;
