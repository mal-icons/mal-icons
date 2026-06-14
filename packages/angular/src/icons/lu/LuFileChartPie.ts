import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-file-chart-pie",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuFileChartPie {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.94 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-0.71-1.7l-3.59-3.59A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.51"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M4.02 11.51a6 6 0 1 0 8.47 8.48"}],["path",{"d":"M9 16a1 1 0 0 1-1-1v-4c0-0.550.45-1.011-0.92a6 6 0 0 1 4.92 4.92c0.090.54-0.361-0.921z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuFileChartPie;
