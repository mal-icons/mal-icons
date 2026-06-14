import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-split-view-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSplitView24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 2h16.5c0.97 0 1.750.78 1.75 1.75v16.5c0 0.46-0.180.91-0.51 1.24A1.75 1.75 0 0 1 20.25 22H3.75c-0.46 0-0.91-0.18-1.24-0.51A1.75 1.75 0 0 1 2 20.25V3.75C2 2.78 2.78 2 3.75 2ZM3.5 3.75v16.5c0 0.140.110.250.250.25H11v-17H3.75a0.250.25 0 0 0-0.250.25Zm9 16.75h7.75a0.250.25 0 0 0 0.25-0.25V3.75a0.250.25 0 0 0-0.25-0.25H12.5v17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSplitView24;
