import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-wind-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWindSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 12.77 3 9.96 5.26 9.2 8.34 C 7.96 8.83 6.95 9.8 6.42 11.02 C 2.92 10.76 0 13.55 0 17 C 0 20.31 2.69 23 6 23 L 6 21 C 3.79 21 2 19.21 2 17 C 2 14.79 3.79 13 6 13 C 6.28 13 6.57 13.04 6.88 13.11 L 7.86 13.33 L 8.08 12.35 C 8.32 11.24 9.2 10.36 10.3 10.09 L 10.96 9.94 L 11.06 9.27 C 11.42 6.83 13.54 5 16 5 C 17.89 5 19.61 6.05 20.46 7.75 L 20.86 8.53 L 21.68 8.24 C 22.15 8.08 22.58 8 23 8 C 25.21 8 27 9.79 27 12 C 27 12.04 26.99 12.07 26.98 12.11 C 26.98 12.18 26.97 12.25 26.96 12.32 L 26.9 13.04 L 27.57 13.32 C 29.05 13.95 30 15.39 30 17 C 30 19.21 28.21 21 26 21 L 23.46 21 C 23.72 21.29 23.95 21.6 24.15 21.94 C 24.35 22.27 24.52 22.63 24.65 23 L 26 23 C 29.31 23 32 20.31 32 17 C 32 14.84 30.84 12.87 29 11.8 C 28.89 8.59 26.24 6 23 6 C 22.61 6 22.22 6.04 21.83 6.13 C 20.54 4.18 18.37 3 16 3 Z M 15.5 12 C 14.36 12 13.34 12.55 12.7 13.4 L 14.3 14.6 C 14.57 14.23 15 14 15.5 14 C 16.34 14 17 14.66 17 15.5 C 17 16.34 16.34 17 15.5 17 L 9 17 L 9 19 L 15.5 19 C 17.42 19 19 17.42 19 15.5 C 19 13.58 17.42 12 15.5 12 Z M 8 21 L 8 23 L 11 23 C 11.57 23 12 23.43 12 24 C 12 24.57 11.57 25 11 25 C 10.63 25 10.31 24.8 10.14 24.5 L 8.41 25.51 C 8.93 26.4 9.9 27 11 27 C 12.64 27 14 25.64 14 24 C 14 23.65 13.93 23.32 13.81 23 L 19 23 C 20.12 23 21 23.88 21 25 C 21 26.12 20.12 27 19 27 C 18.12 27 17.39 26.44 17.11 25.66 L 15.23 26.33 C 15.78 27.89 17.27 29 19 29 C 21.2 29 23 27.2 23 25 C 23 22.8 21.2 21 19 21 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWindSolid;
