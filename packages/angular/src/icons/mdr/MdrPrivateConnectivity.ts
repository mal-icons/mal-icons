import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-private-connectivity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPrivateConnectivity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12c0-0.55-0.45-1-1-1h-2.07c-0.49-3.39-3.4-6-6.93-6s-6.44 2.61-6.93 6H3c-0.55 0-1 0.45-1 1s0.45 1 1 1h2.07c0.49 3.39 3.4 6 6.93 6s6.44-2.61 6.93-6H21c0.55 0 1-0.45 1-1zm-7 2.5c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v-3c0-0.550.45-1 1-1v-1a2 2 0 0 1 2.34-1.97c0.980.16 1.66 1.08 1.66 2.08v0.89c0.55 0 1 0.45 1 1v3zM12.75 13c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.750.34-0.750.75-0.750.750.340.750.75zM13 9.5v1h-2v-1c0-0.550.45-1 1-1s1 0.45 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPrivateConnectivity;
