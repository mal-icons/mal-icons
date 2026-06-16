import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-private-connectivity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPrivateConnectivity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.93 11c-0.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H2v2h3.07c0.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H22v-2h-3.07zM15 10.5v5H9v-5h1v-1a2 2 0 0 1 2.34-1.97c0.980.16 1.66 1.08 1.66 2.08v0.89h1zM12.75 13c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.750.34-0.750.75-0.750.750.340.750.75zM13 9.5v1h-2v-1c0-0.550.45-1 1-1s1 0.45 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPrivateConnectivity;
