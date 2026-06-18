import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-cloud-sun-rain-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCloudSunRainSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 7 6 L 7 9.09 C 6.37 9.22 5.77 9.5 5.25 9.84 L 3.06 7.63 L 1.63 9.06 L 3.84 11.25 C 3.5 11.77 3.22 12.37 3.09 13 L 0 13 L 0 15 L 3.09 15 C 3.23 15.64 3.49 16.23 3.84 16.75 L 1.63 18.94 L 3.06 20.38 L 5.25 18.16 C 5.55 18.36 5.88 18.52 6.22 18.66 C 6.1 19.09 6 19.54 6 20 C 6 22.76 8.24 25 11 25 L 12.16 25 C 12.34 24.37 12.66 23.68 13.03 23 L 11 23 C 9.35 23 8 21.65 8 20 C 8 18.35 9.35 17 11 17 L 12 17 L 12 16 C 12 14.9 12.89 14 13.91 14 L 14.91 14.06 L 15.09 13.22 C 15.47 11.36 17.1 10 19 10 C 20.61 10 22.05 10.96 22.69 12.44 L 22.97 13.13 L 23.88 13.03 C 23.92 13.02 23.95 13 24 13 C 25.65 13 27 14.35 27 15.94 L 26.97 16.91 L 27.75 17.09 C 29.08 17.43 30 18.64 30 20 C 30 21.65 28.65 23 27 23 L 26 23 C 26 23.73 25.78 24.41 25.44 25 L 27 25 C 29.76 25 32 22.76 32 20 C 32 17.98 30.79 16.18 28.97 15.41 C 28.69 12.99 26.66 11.1 24.19 11 C 23.13 9.15 21.16 8 19 8 C 16.42 8 14.13 9.67 13.31 12.06 C 13.08 12.1 12.87 12.14 12.66 12.22 C 12.52 11.88 12.36 11.55 12.16 11.25 L 14.38 9.06 L 12.94 7.63 L 10.75 9.84 C 10.23 9.49 9.64 9.23 9 9.09 L 9 6 Z M 8 11 C 9.47 11 10.67 12.05 10.94 13.44 C 10.55 13.91 10.24 14.48 10.09 15.09 C 8.89 15.31 7.86 15.96 7.13 16.88 C 5.89 16.5 5 15.36 5 14 C 5 12.33 6.33 11 8 11 Z M 22 19 C 22 19 20 21.89 20 23 C 20 24.11 20.89 25 22 25 C 22.14 25 22.28 25 22.41 24.97 C 23.32 24.78 24 23.97 24 23 C 24 21.89 22 19 22 19 Z M 16 22 C 16 22 15.71 22.45 15.38 23 C 15.25 23.2 15.13 23.36 15 23.59 C 14.82 23.91 14.66 24.21 14.5 24.53 C 14.42 24.69 14.34 24.85 14.28 25 C 14.12 25.39 14 25.75 14 26 C 14 27.11 14.89 28 16 28 C 17.11 28 18 27.11 18 26 C 18 25.75 17.88 25.39 17.72 25 C 17.7 24.97 17.7 24.94 17.69 24.91 C 17.63 24.79 17.56 24.66 17.5 24.53 C 17.23 23.98 16.91 23.46 16.63 23 C 16.29 22.45 16 22 16 22 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCloudSunRainSolid;
