import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-graduation-cap-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGraduationCapSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4.88 L 15.53 5.13 L 2.03 12.13 L 0.31 13 L 2 13.84 L 2 22.28 C 1.4 22.63 1 23.26 1 24 C 1 25.11 1.89 26 3 26 C 4.11 26 5 25.11 5 24 C 5 23.26 4.6 22.63 4 22.28 L 4 14.88 L 6 15.91 L 6 21 C 6 21.44 6.2 21.84 6.44 22.09 C 6.67 22.35 6.96 22.5 7.25 22.66 C 7.84 22.96 8.54 23.18 9.41 23.38 C 11.14 23.76 13.45 24 16 24 C 18.55 24 20.86 23.76 22.59 23.38 C 23.46 23.18 24.16 22.96 24.75 22.66 C 25.04 22.5 25.33 22.35 25.56 22.09 C 25.8 21.84 26 21.44 26 21 L 26 15.91 L 29.97 13.88 L 31.69 13 L 29.97 12.13 L 16.47 5.13 Z M 16 7.13 L 27.31 13 L 25.53 13.91 C 25.3 13.67 25.03 13.49 24.75 13.34 C 24.16 13.04 23.46 12.82 22.59 12.63 C 20.86 12.24 18.56 12 16 12 C 13.44 12 11.14 12.24 9.41 12.63 C 8.54 12.82 7.84 13.04 7.25 13.34 C 6.97 13.49 6.7 13.67 6.47 13.91 L 4.69 13 Z M 16 14 C 18.44 14 20.64 14.22 22.16 14.56 C 22.91 14.73 23.52 14.93 23.84 15.09 C 23.95 15.15 23.96 15.19 24 15.22 L 24 19.03 C 23.58 18.88 23.13 18.74 22.59 18.63 C 20.86 18.24 18.55 18 16 18 C 13.45 18 11.14 18.24 9.41 18.63 C 8.88 18.74 8.42 18.88 8 19.03 L 8 15.22 C 8.04 15.19 8.05 15.15 8.16 15.09 C 8.48 14.93 9.09 14.73 9.84 14.56 C 11.36 14.22 13.56 14 16 14 Z M 16 20 C 18.43 20 20.63 20.22 22.16 20.56 C 22.79 20.7 23.19 20.85 23.53 21 C 23.19 21.15 22.79 21.3 22.16 21.44 C 20.63 21.78 18.43 22 16 22 C 13.57 22 11.37 21.78 9.84 21.44 C 9.21 21.3 8.81 21.15 8.47 21 C 8.81 20.85 9.21 20.7 9.84 20.56 C 11.37 20.22 13.57 20 16 20 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGraduationCapSolid;
