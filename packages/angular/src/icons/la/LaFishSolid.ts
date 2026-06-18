import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-fish-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFishSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 10.5 6 L 11.06 7.38 C 11.41 8.23 11.89 10.37 11.78 11.38 C 10.42 12.21 9.58 13.04 8.94 13.72 C 8.15 13.08 6.59 12 4 12 L 3 12 L 3 13 C 3 14.91 3.69 16.47 3.94 17 C 3.69 17.53 3 19.03 3 21 L 3 22 L 4 22 C 6.57 22 8.15 20.91 8.94 20.28 C 10.12 21.5 11.81 22.79 13.94 23.75 C 13.84 24.37 13.77 25.24 14.03 26.25 L 14.22 27 L 15 27 C 16.23 27 17.3 26.39 18.16 25.84 C 18.86 25.4 19.2 25.09 19.38 24.94 C 23.35 24.8 25.89 22.65 27.25 20.53 C 28.66 18.34 29 16.16 29 16.16 L 29.03 15.91 L 28.94 15.66 C 28.94 15.66 26.65 9.37 20.44 9.06 C 19.78 8.26 18.86 7.6 17.56 7.06 C 16.04 6.43 14.11 6 12 6 Z M 13.41 8.13 C 14.67 8.27 15.85 8.52 16.78 8.91 C 18.06 9.43 18.95 10.19 19.16 10.53 L 19.44 11 L 20 11 C 25 11 26.79 15.73 26.94 16.13 C 26.87 16.49 26.58 17.89 25.56 19.47 C 24.4 21.28 22.52 23 19 23 L 18.63 23 L 18.34 23.25 C 18.34 23.25 17.82 23.7 17.09 24.16 C 16.71 24.39 16.39 24.44 16 24.59 C 16.04 24.14 16 23.47 16 23.47 L 16.22 22.59 L 15.41 22.31 C 12.93 21.37 10.82 19.59 9.75 18.34 L 9.06 17.53 L 8.31 18.28 C 8.31 18.28 6.98 19.21 5.25 19.66 C 5.51 18.48 5.91 17.44 5.91 17.44 L 6.13 17 L 5.91 16.56 C 5.91 16.56 5.47 15.41 5.22 14.19 C 7.06 14.59 8.31 15.72 8.31 15.72 L 9.06 16.47 L 9.75 15.66 C 10.64 14.64 13.05 12.13 16.59 11.66 L 16.31 9.69 C 15.36 9.81 14.52 10.09 13.72 10.41 C 13.67 9.57 13.63 8.84 13.41 8.13 Z M 22.5 15 C 21.67 15 21 15.67 21 16.5 C 21 17.33 21.67 18 22.5 18 C 23.33 18 24 17.33 24 16.5 C 24 15.67 23.33 15 22.5 15 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFishSolid;
