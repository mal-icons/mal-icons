import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-chart-line-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChartLineSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 27.22 5.38 L 23.72 9.75 L 20.44 8.09 L 19.66 7.72 L 19.16 8.44 L 15.75 13.56 L 12.59 11.19 L 12 10.75 L 11.41 11.19 L 7.78 13.91 L 4.25 13.03 L 3.75 14.97 L 7.75 15.97 L 8.22 16.09 L 8.59 15.81 L 12 13.25 L 15.41 15.81 L 16.25 16.44 L 16.84 15.56 L 20.34 10.31 L 23.56 11.91 L 24.28 12.25 L 28.78 6.63 Z M 20.06 18.31 L 19.22 19.38 L 15.81 23.63 L 12.59 21.19 L 12 20.75 L 11.41 21.19 L 7.91 23.81 L 4.44 22.09 L 3.56 23.91 L 7.56 25.91 L 8.09 26.16 L 8.59 25.81 L 12 23.25 L 15.41 25.81 L 16.19 26.38 L 16.78 25.63 L 19.91 21.72 L 23.16 26.56 L 23.94 27.69 L 24.78 26.63 L 28.78 21.63 L 27.22 20.38 L 24.09 24.28 L 20.84 19.44 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChartLineSolid;
