import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-user-graduate-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaUserGraduateSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 L 3 7 L 6.11 7.95 L 9 8.84 L 9 11.51 C 8.88 11.66 8.78 11.81 8.71 11.96 C 8.53 12.34 8.41 12.77 8.31 13.27 C 8.12 14.21 8.02 15.44 8.01 16.79 C 7.4 17.33 7 18.12 7 19 C 7 20.28 7.91 21.2 9.04 21.63 C 9.49 22.93 10.24 24.37 11.33 25.58 C 12.52 26.91 14.1 28 16 28 C 17.9 28 19.48 26.91 20.67 25.58 C 21.76 24.37 22.51 22.93 22.96 21.63 C 24.09 21.2 25 20.28 25 19 C 25 18.12 24.61 17.32 23.99 16.77 C 23.98 15.43 23.88 14.21 23.69 13.27 C 23.59 12.77 23.47 12.34 23.29 11.96 C 23.22 11.81 23.13 11.66 23 11.51 L 23 8.84 L 29 7 Z M 16 5.09 L 22.2 7 L 16 8.91 L 9.8 7 Z M 11 9.46 L 16 11 L 16.3 10.91 L 21 9.46 L 21 11.78 C 20.99 11.8 21 11.8 20.95 11.83 C 20.8 11.96 20.47 12.16 20.03 12.34 C 19.13 12.69 17.75 13 16 13 C 14.25 13 12.87 12.69 11.97 12.34 C 11.53 12.16 11.2 11.96 11.05 11.83 C 11 11.8 11.01 11.8 11 11.78 Z M 10.27 13.71 C 10.55 13.88 10.87 14.05 11.23 14.19 C 12.41 14.66 14.02 15 16 15 C 17.98 15 19.59 14.66 20.77 14.19 C 21.13 14.05 21.45 13.88 21.73 13.71 C 21.89 14.52 22 15.7 22 17 L 22 17.85 L 22.5 18.14 C 22.8 18.31 23 18.62 23 19 C 23 19.54 22.6 19.95 22.08 19.99 L 21.41 20.04 L 21.21 20.69 C 20.88 21.77 20.13 23.18 19.18 24.25 C 18.22 25.32 17.11 26 16 26 C 14.89 26 13.78 25.32 12.82 24.25 C 11.87 23.18 11.13 21.77 10.79 20.69 L 10.59 20.04 L 9.92 19.99 C 9.4 19.95 9 19.54 9 19 C 9 18.63 9.2 18.32 9.51 18.14 L 10.02 17.84 L 10 17 L 10 16.99 C 10 15.69 10.11 14.52 10.27 13.71 Z M 8.17 17 L 9 17 L 8.16 17.02 Z M 13 18 C 12.45 18 12 18.45 12 19 C 12 19.55 12.45 20 13 20 C 13.55 20 14 19.55 14 19 C 14 18.45 13.55 18 13 18 Z M 19 18 C 18.45 18 18 18.45 18 19 C 18 19.55 18.45 20 19 20 C 19.55 20 20 19.55 20 19 C 20 18.45 19.55 18 19 18 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaUserGraduateSolid;
