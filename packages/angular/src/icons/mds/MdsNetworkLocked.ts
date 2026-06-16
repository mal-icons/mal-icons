import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-network-locked",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsNetworkLocked {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 16v-0.36c0-1.31-0.94-2.5-2.24-2.63A2.5 2.5 0 0 0 17 15.5v0.5h-1v6h7v-6h-1zm-1 0h-3v-0.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5v0.5zm-1.5-5c0.15 0 0.30.010.460.020.01 0 0.030.010.040.01V1L1 20h13v-6h1.26c0.22-0.630.58-1.2 1.06-1.680.85-0.85 1.98-1.32 3.18-1.32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsNetworkLocked;
