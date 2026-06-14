import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-plane-landing",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuPlaneLanding {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 22h20"}],["path",{"d":"M3.77 10.77 2 9l2-4.5 1.10.55c0.550.280.90.840.9 1.45s0.35 1.170.9 1.45L8 8.5l3-6 1.050.53a2 2 0 0 1 1.09 1.52l0.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c0.420.220.780.55 1.010.96l0.6 1.03c0.490.88-0.06 1.98-1.06 2.1l-1.180.15c-0.470.06-0.95-0.02-1.37-0.24L4.29 11.15a2 2 0 0 1-0.52-0.38Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuPlaneLanding;
