import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-railway-alert",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRailwayAlert {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 11V8h7.29c-0.77-2.60.21-4.610.37-4.97C2.97 2.67 2 5.02 2 7v9.5C2 18.43 3.57 20 5.5 20l-1.210.81A0.650.65 0 0 0 4.65 22h10.7a0.650.65 0 0 0 0.36-1.19L14.5 20c1.93 0 3.5-1.57 3.5-3.5V13c-1.91 0-3.63-0.76-4.89-2H4zm6 6c-0.83 0-1.5-0.67-1.5-1.5S9.17 14 10 14s1.50.67 1.5 1.5S10.83 17 10 17z"}],["path",{"d":"M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.50.50.220.50.5-0.220.5-0.50.5zm0.5-2.5c0 0.28-0.220.5-0.50.5s-0.5-0.22-0.5-0.5v-3c0-0.280.22-0.50.5-0.5s0.50.220.50.5v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRailwayAlert;
