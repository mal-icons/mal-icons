import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-chart-scatter-3d",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbChartScatter3d {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 20l9 -7"}],["path",{"d":"M12 3v10l9 7"}],["path",{"d":"M17 12v0.02"}],["path",{"d":"M17 4.01v0.02"}],["path",{"d":"M21 8.02v0.02"}],["path",{"d":"M12 19.02v0.02"}],["path",{"d":"M3 12.02v0.02"}],["path",{"d":"M7 8.02v0.02"}],["path",{"d":"M3 4.01v0.02"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbChartScatter3d;
