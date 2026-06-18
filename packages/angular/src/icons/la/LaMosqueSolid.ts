import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-mosque-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMosqueSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6.44 4.16 L 5.53 6.66 L 4.06 10.66 L 4 10.81 L 4 28 L 15 28 L 15 25 C 15 24.41 15.1 24.15 15.19 24 C 15.27 23.85 15.37 23.76 15.59 23.59 C 15.71 23.51 15.84 23.42 16 23.28 C 16.16 23.42 16.29 23.51 16.41 23.59 C 16.63 23.76 16.73 23.85 16.81 24 C 16.9 24.15 17 24.41 17 25 L 17 28 L 28 28 L 28 10.81 L 27.94 10.63 L 26.41 6.63 L 25.44 4.16 L 24.53 6.66 L 23.06 10.66 L 23 10.81 L 23 17 L 22.91 17 C 22.59 14.29 21.02 12.64 19.56 11.66 C 18.75 11.11 17.98 10.73 17.5 10.41 C 17.26 10.25 17.09 10.11 17.03 10.03 C 16.97 9.96 17 9.99 17 10 L 17 9 L 15 9 L 15 10 C 15 9.99 15.03 9.95 14.97 10.03 C 14.91 10.11 14.74 10.27 14.5 10.44 C 14.02 10.77 13.25 11.17 12.44 11.72 C 10.99 12.7 9.42 14.34 9.09 17 L 9 17 L 9 10.81 L 8.94 10.63 L 7.41 6.63 Z M 6.47 9.88 L 7 11.22 L 7 26 L 6 26 L 6 11.19 Z M 25.47 9.88 L 26 11.22 L 26 26 L 25 26 L 25 11.19 Z M 16 11.78 C 16.13 11.88 16.25 11.98 16.38 12.06 C 17.02 12.49 17.75 12.88 18.44 13.34 C 19.62 14.14 20.64 15.08 20.91 17 L 11.09 17 C 11.36 15.1 12.38 14.15 13.56 13.34 C 14.25 12.88 14.98 12.5 15.63 12.06 C 15.75 11.97 15.88 11.88 16 11.78 Z M 9 19 L 23 19 L 23 26 L 19 26 L 19 25 C 19 24.18 18.85 23.51 18.56 23 C 18.27 22.49 17.87 22.17 17.59 21.97 C 17.32 21.77 17.18 21.67 17.13 21.59 C 17.07 21.52 17 21.41 17 21 L 15 21 C 15 21.41 14.93 21.52 14.88 21.59 C 14.82 21.67 14.68 21.77 14.41 21.97 C 14.13 22.17 13.73 22.49 13.44 23 C 13.15 23.51 13 24.18 13 25 L 13 26 L 9 26 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMosqueSolid;
