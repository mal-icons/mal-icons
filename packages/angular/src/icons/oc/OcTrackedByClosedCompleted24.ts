import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-tracked-by-closed-completed-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcTrackedByClosedCompleted24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.50.750.75 0 0 1 0 1.5C5.93 23 1 18.08 1 12S5.93 1 12 1s11 4.93 11 11a0.750.75 0 0 1-1.5 0A9.5 9.5 0 0 0 12 2.5Z"}],["path",{"d":"m13.76 17.48 3.73 3.31a0.310.31 0 0 0 0.51-0.23V18h4.25a0.750.75 0 0 0 0-1.5H18v-2.56a0.310.31 0 0 0-0.51-0.23l-3.73 3.31a0.310.31 0 0 0 0 0.46Zm3.52-8.2a0.750.75 0 1 0-1.06-1.06l-5.97 5.97-2.47-2.47a0.750.75 0 1 0-1.06 1.06l3 3a0.750.75 0 0 0 1.06 0l6.5-6.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcTrackedByClosedCompleted24;
