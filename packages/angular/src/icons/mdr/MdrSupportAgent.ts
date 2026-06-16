import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-support-agent",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSupportAgent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-0.60.34-1 0.98-1 1.72v2c0 1.10.9 2 2 2 0.55 0 1-0.45 1-1v-4.81c0-3.83 2.95-7.18 6.78-7.29a7.01 7.01 0 0 1 7.22 7V19h-7c-0.55 0-1 0.45-1 1s0.45 1 1 1h7c1.1 0 2-0.9 2-2v-1.22c0.59-0.31 1-0.92 1-1.64v-2.3c0-0.7-0.41-1.31-1-1.62z"}],["circle",{"cx":"9","cy":"13","r":"1"}],["circle",{"cx":"15","cy":"13","r":"1"}],["path",{"d":"M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.07 8.07 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSupportAgent;
