import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-area-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAreaChart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M150-160q-12.75 0-21.37-8.62T120-190v-481q5 0 11.5 2t12.5 7l136 102 182-254q8-11 20.5-12.5T505-820l175 140h130q12.75 0 21.38 8.63T840-650v460q0 12.75-8.62 21.38T810-160H150Zm174-91 142-196q8-11 20.5-12.5T509-453l271 212v-379H659L492-754 294-475l-114-85v194l144 115Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAreaChart;
