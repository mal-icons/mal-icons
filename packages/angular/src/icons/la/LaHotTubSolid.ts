import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-hot-tub-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaHotTubSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11.22 4.38 C 10.39 5.4 10.01 6.27 10 7.13 C 9.99 7.98 10.37 8.64 10.63 9.06 C 10.88 9.49 10.99 9.7 11 9.94 C 11.01 10.17 10.93 10.58 10.31 11.38 L 11.88 12.63 C 12.66 11.62 13.03 10.71 13 9.88 C 12.97 9.04 12.59 8.44 12.34 8.03 C 12.1 7.62 12 7.4 12 7.16 C 12 6.91 12.11 6.45 12.78 5.63 Z M 16.22 4.38 C 15.39 5.4 15.01 6.27 15 7.13 C 14.99 7.98 15.37 8.64 15.63 9.06 C 15.88 9.49 15.99 9.7 16 9.94 C 16.01 10.17 15.93 10.58 15.31 11.38 L 16.88 12.63 C 17.66 11.62 18.03 10.71 18 9.88 C 17.97 9.04 17.59 8.44 17.34 8.03 C 17.1 7.62 17 7.4 17 7.16 C 17 6.91 17.11 6.45 17.78 5.63 Z M 21.22 4.38 C 20.39 5.4 20.01 6.27 20 7.13 C 19.99 7.98 20.37 8.64 20.63 9.06 C 20.88 9.49 20.99 9.7 21 9.94 C 21.01 10.17 20.93 10.58 20.31 11.38 L 21.88 12.63 C 22.66 11.62 23.03 10.71 23 9.88 C 22.97 9.04 22.59 8.44 22.34 8.03 C 22.1 7.62 22 7.4 22 7.16 C 22 6.91 22.11 6.45 22.78 5.63 Z M 3 14 L 3 16 L 4.19 16 L 5.72 23.59 L 5.72 23.63 C 5.95 24.66 6.71 25.5 7.72 25.84 L 7 28 L 9 28 L 9.66 26 L 22.34 26 L 23 28 L 25 28 L 24.28 25.84 C 25.33 25.52 26.14 24.68 26.38 23.63 L 26.38 23.59 L 27.81 16 L 29 16 L 29 14 Z M 6.22 16 L 25.81 16 L 24.41 23.22 C 24.29 23.65 23.92 24 23.41 24 L 8.69 24 C 8.15 24 7.79 23.64 7.69 23.19 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaHotTubSolid;
