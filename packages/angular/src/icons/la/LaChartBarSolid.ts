import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-chart-bar-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChartBarSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 21 4 L 21 28 L 29 28 L 29 4 Z M 23 6 L 27 6 L 27 26 L 23 26 Z M 3 10 L 3 28 L 11 28 L 11 10 Z M 5 12 L 9 12 L 9 26 L 5 26 Z M 12 16 L 12 28 L 20 28 L 20 16 Z M 14 18 L 18 18 L 18 26 L 14 26 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChartBarSolid;
