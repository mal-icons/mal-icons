import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-lidl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLidl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0zm0.210.21h23.58v23.58H0.21zm11.790.63C5.830.830.83 5.830.83 12c0 6.17 5 11.17 11.17 11.17 6.17 0 11.17-5 11.17-11.17C23.17 5.84 18.170.84 12 0.83zm00.71c5.78 0 10.46 4.68 10.46 10.46v0c0 5.77-4.69 10.45-10.46 10.45-5.78 0-10.46-4.68-10.46-10.46C1.54 6.23 6.22 1.54 12 1.54zM9.23 7.85c-0.64 0-1.170.52-1.17 1.17v0c0 1.04 1.26 1.57 20.830.74-0.740.22-2-0.83-2zM2.73 10.06v0.71h0.55v2.47h-0.55v0.71h4.64v-0.65l0.54-0.54 1.49 1.49-0.550.550.360.36 2.97-2.98v-0.71l-0.830.83-1.85-1.85-2.13 2.13v-0.58l-1.9 1.06V10.77h0.55v-0.71zm8.9 0v0.71h0.55v2.47h-0.56v0.71h3.13c2.33 0 2.36-3.890.01-3.89zm4.96 0v0.71h0.55v2.47h-0.55v0.71h4.65v-1.94l-1.91 1.06V10.77h0.55v-0.71zm-2.43 1.21h0.13c0.69 0 0.69 1.460.02 1.46h-0.16v-1.46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLidl;
