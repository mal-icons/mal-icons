import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-chart-no-axes-combined",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuChartNoAxesCombined {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 16v5"}],["path",{"d":"M16 14.64V21"}],["path",{"d":"M20 10.66V21"}],["path",{"d":"m22 3-8.65 8.65a0.50.5 0 0 1-0.71 0L9.35 8.35a0.50.5 0 0 0-0.71 0L2 15"}],["path",{"d":"M4 18.46V21"}],["path",{"d":"M8 14.66V21"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuChartNoAxesCombined;
