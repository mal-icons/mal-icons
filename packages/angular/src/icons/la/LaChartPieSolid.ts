import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-chart-pie-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChartPieSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 Z M 14.88 5.06 C 14.92 5.06 14.96 5.07 15 5.06 L 15 16.41 L 15.28 16.72 L 23.06 24.47 C 21.16 26.06 18.69 27 16 27 C 9.91 27 5 22.09 5 16 C 5 10.29 9.32 5.63 14.88 5.06 Z M 17 5.06 C 22.29 5.54 26.46 9.71 26.94 15 L 17 15 Z M 18.44 17 L 26.94 17 C 26.73 19.29 25.86 21.39 24.47 23.06 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChartPieSolid;
