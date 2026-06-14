import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-wrap-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcWrap16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.75 7a0.750.75 0 0 0-0.530.220.750.75 0 0 0 0 1.06c0.140.140.330.220.530.22h10c0.46 0 0.910.18 1.240.51a1.75 1.75 0 0 1 0 2.47A1.75 1.75 0 0 1 11.75 12h-1.46v-0.46a0.680.68 0 0 0-0.37-0.610.690.69 0 0 0-0.710.06l-1.62 1.21a0.680.68 0 0 0 0 1.09L9.2 14.51a0.680.68 0 0 0 0.710.060.690.69 0 0 0 0.38-0.61V13.5h1.46A3.25 3.25 0 0 0 15 10.25 3.25 3.25 0 0 0 11.75 7h-10ZM1 2.75c0-0.20.08-0.390.22-0.53A0.750.75 0 0 1 1.75 2h12.5c0.2 0 0.390.080.530.22a0.750.75 0 0 1 0 1.060.750.75 0 0 1-0.530.22H1.75a0.750.75 0 0 1-0.53-0.220.750.75 0 0 1-0.22-0.53ZM1.75 12h3.5c0.2 0 0.390.080.530.22a0.750.75 0 0 1 0 1.060.750.75 0 0 1-0.530.22h-3.5a0.750.75 0 0 1-0.53-0.220.750.75 0 0 1 0-1.060.750.75 0 0 1 0.53-0.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcWrap16;
