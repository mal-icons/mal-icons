import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hellyhansen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHellyhansen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.91 5.95a1.09 1.09 0 100 2.18 1.09 1.09 0 0-2.18zm0.010.24a0.850.85 0 110 1.70.850.85 0 10-1.7zm-0.330.38v0.95h0.18v-0.35h0.17l0.180.35h0.21l-0.21-0.38c0.05-0.020.19-0.070.19-0.28 0-0.17-0.12-0.29-0.32-0.29h-0.4zm0.180.16h0.17c0.12 0 0.180.060.180.14 0 0.09-0.060.14-0.160.14h-0.2v-0.29zM0 7.04v11.02h3.68v-3.78h3.52v3.78h1.42l2.15-11.02H7.22v3.85H3.7V7.04H0zm12.13 0L9.99 18.06h3.55V14.2h3.52v3.85h3.7V7.04H17.07v3.78h-3.52v-3.78h-1.42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHellyhansen;
