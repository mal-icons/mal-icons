import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-hiking-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaHikingSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16.5 4 C 14.58 4 13 5.58 13 7.5 C 13 9.42 14.58 11 16.5 11 C 18.42 11 20 9.42 20 7.5 C 20 5.58 18.42 4 16.5 4 Z M 16.5 6 C 17.34 6 18 6.66 18 7.5 C 18 8.34 17.34 9 16.5 9 C 15.66 9 15 8.34 15 7.5 C 15 6.66 15.66 6 16.5 6 Z M 11.09 10.5 C 10.84 10.49 10.57 10.49 10.31 10.53 C 9.79 10.62 9.28 10.85 8.84 11.22 C 7.97 11.96 7.46 13.14 7.09 14.88 C 6.98 15.43 7.01 16.01 7.28 16.47 C 7.55 16.93 7.97 17.2 8.34 17.38 C 9.09 17.72 9.82 17.79 10.22 17.88 L 10.69 15.94 C 10.09 15.8 9.47 15.69 9.19 15.56 C 9.05 15.5 9.03 15.46 9.03 15.47 C 9.02 15.45 9.01 15.38 9.03 15.28 C 9.35 13.77 9.82 13.04 10.16 12.75 C 10.5 12.46 10.78 12.42 11.41 12.56 L 11.84 10.59 C 11.6 10.54 11.35 10.51 11.09 10.5 Z M 12.84 10.81 L 11.38 17.5 C 11.21 18.25 11.52 19.06 12.13 19.53 L 15.66 22.28 L 16.53 28 L 18.56 28 L 17.63 21.97 C 17.55 21.46 17.28 21 16.88 20.69 L 13.34 17.94 L 14.38 13.28 L 15.41 13.56 L 17.19 15.28 C 17.77 15.84 18.64 15.97 19.38 15.66 L 21 14.97 L 21 28 L 23 28 L 23 11 L 21 11 L 21 12.81 L 18.59 13.84 L 16.81 12.13 C 16.57 11.89 16.27 11.71 15.94 11.63 Z M 11.53 20.63 L 10.69 23.16 L 8.19 28 L 10.44 28 L 12.47 24.09 C 12.52 24 12.56 23.88 12.59 23.78 L 13.22 21.94 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaHikingSolid;
