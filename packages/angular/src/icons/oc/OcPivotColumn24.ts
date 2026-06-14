import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-pivot-column-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPivotColumn24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 3.75C2 2.78 2.78 2 3.75 2h16.5c0.97 0 1.750.78 1.75 1.75V10a0.750.75 0 0 1-1.5 0V8.75H8.75V20.5H10a0.750.75 0 0 1 0 1.5H3.75A1.75 1.75 0 0 1 2 20.25Zm6.75-0.25v3.75H20.5v-3.5a0.250.25 0 0 0-0.25-0.25Zm-1.5 17V8.75H3.5v11.5c0 0.140.110.250.250.25ZM3.5 7.25h3.75V3.5h-3.5a0.250.25 0 0 0-0.250.25Z"}],["path",{"d":"M21.25 12.31a0.750.75 0 0 1 0.750.75v2.63a3.75 3.75 0 0 1-3.75 3.75h-3.5l2.03 2.03a0.750.75 0 1 1-1.06 1.06l-3.25-3.25a0.750.75 0 0 1 0-1.06l3.25-3.25a0.750.75 0 1 1 1.06 1.06l-1.91 1.91h3.38a2.25 2.25 0 0 0 2.25-2.25v-2.63a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPivotColumn24;
