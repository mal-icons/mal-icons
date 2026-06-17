import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-steelwing-emblem",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSteelwingEmblem {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M20.16 87l-0.87 47.69 145.56 48.72 8.94 2.97-3.06 8.9c-14.86 43.4-17.93 93.21-3.56 138.47 4.1 17.56 11.6 33.38 21.53 46.34l-9.4 10.66-5.47 6.19 5.47 6.16 69.53 78.97 7.03 7.94 7-7.94 69.56-78.97 5.44-6.16-5.44-6.19-9.56-10.87c9.85-12.93 17.29-28.66 21.38-46.12 14.37-45.26 11.29-95.07-3.56-138.47l-3.06-8.9 8.94-2.97 145.56-48.72L491.22 87l-201.25 80.19c15.49 20.6 25.62 54.78 25.62 93.47 0 34.85-8.23 66.03-21.19 86.94l-31.56-35.81-7-7.94-7.03 7.94-31.72 36c-13.02-20.9-21.31-52.16-21.31-87.12 0-38.66 10.12-72.83 25.6-93.44L20.16 87zM493.5 153.91L361.16 198.22c2.56 8.47 4.7 17.16 6.41 25.97l123.53-12.37c1.64-19.07 2.36-38.53 2.41-57.91zm-474.160.5c0.06 19.220.78 38.5 2.41 57.41l122.06 12.22c1.71-8.76 3.83-17.39 6.38-25.81L19.34 154.41zm4.41 76.41c2.14 17.5 5.12 34.54 9.22 50.75l106.12-9.84c0.02-9.790.65-19.53 1.81-29.19L23.75 230.81zm465.34 0L370.47 242.66c1.15 9.56 1.76 19.21 1.78 28.91l107.63 10c4.1-16.21 7.08-33.26 9.22-50.75zm-117.53 59.44c-0.56 7.23-1.46 14.45-2.72 21.63l87.97 30.16c7.12-12.94 13.02-27.08 17.84-42.19l-103.09-9.59zm-231.780.16l-101.59 9.44c4.82 15.1 10.73 29.25 17.84 42.19l86.56-29.65c-1.3-7.29-2.24-14.62-2.81-21.97zm225 39.84c-2.01 7.52-4.45 14.96-7.34 22.28L412.28 394c13.43-9.78 24.84-21.83 34.47-35.69l-81.97-28.06zm-218.090.47L66.09 358.31c9.63 13.86 21.04 25.9 34.47 35.69l53.69-40.62c-2.98-7.44-5.49-15.01-7.56-22.66zm108.25 2.4v66.56H310.5l-54.69 62.03-57.09-64.78 56.22-63.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSteelwingEmblem;
