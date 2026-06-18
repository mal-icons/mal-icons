import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-venus-mars-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaVenusMarsSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 22 3 L 22 5 L 25.56 5 L 22.19 8.41 C 20.98 7.5 19.53 7 18 7 C 16.13 7 14.38 7.74 13.06 9.06 C 11.74 10.38 11 12.13 11 14 C 11 15.87 11.74 17.61 13.06 18.94 C 13.93 19.81 14.97 20.43 16.13 20.75 C 16.24 20.66 16.37 20.57 16.47 20.47 C 16.9 20.04 17.18 19.51 17.34 18.94 C 16.25 18.8 15.26 18.32 14.47 17.53 C 13.52 16.59 13 15.34 13 14 C 13 12.66 13.52 11.41 14.47 10.47 C 15.41 9.52 16.66 9 18 9 C 19.34 9 20.59 9.52 21.53 10.47 C 22.48 11.41 23 12.66 23 14 C 23 14.86 22.75 15.67 22.34 16.41 C 22.44 16.92 22.5 17.46 22.5 18 C 22.5 18.5 22.46 18.99 22.38 19.47 C 22.57 19.31 22.75 19.12 22.94 18.94 C 24.26 17.61 25 15.87 25 14 C 25 12.47 24.5 11.02 23.59 9.81 L 27 6.44 L 27 10 L 29 10 L 29 3 Z M 15.88 11.25 C 15.76 11.34 15.63 11.43 15.53 11.53 C 15.1 11.96 14.82 12.49 14.66 13.06 C 15.75 13.2 16.74 13.68 17.53 14.47 C 18.48 15.41 19 16.66 19 18 C 19 19.34 18.48 20.59 17.53 21.53 C 16.59 22.48 15.34 23 14 23 C 12.66 23 11.41 22.48 10.47 21.53 C 9.52 20.59 9 19.34 9 18 C 9 17.14 9.25 16.33 9.66 15.59 C 9.56 15.08 9.5 14.54 9.5 14 C 9.5 13.5 9.54 13.01 9.63 12.53 C 9.43 12.69 9.25 12.88 9.06 13.06 C 7.74 14.39 7 16.13 7 18 C 7 19.53 7.5 20.98 8.41 22.19 L 6.72 23.88 L 4.72 21.88 L 3.28 23.28 L 5.28 25.28 L 3.28 27.28 L 4.72 28.72 L 6.72 26.72 L 8.72 28.72 L 10.13 27.28 L 8.13 25.28 L 9.81 23.59 C 11.02 24.5 12.46 25 14 25 C 15.87 25 17.62 24.26 18.94 22.94 C 20.26 21.62 21 19.87 21 18 C 21 16.13 20.26 14.39 18.94 13.06 C 18.07 12.19 17.03 11.57 15.88 11.25 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaVenusMarsSolid;
