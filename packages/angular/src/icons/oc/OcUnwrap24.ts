import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-unwrap-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcUnwrap24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 5.25a0.750.75 0 0 0-0.530.220.750.75 0 0 0 0 1.06c0.140.140.330.220.530.22h16.5c0.2 0 0.39-0.080.53-0.22a0.750.75 0 0 0 0-1.060.750.75 0 0 0-0.53-0.22H3.75Zm0 6a0.750.75 0 0 0-0.530.220.750.75 0 0 0 0 1.06c0.140.140.330.220.530.22h16.5c0.2 0 0.39-0.080.53-0.22a0.750.75 0 0 0 0-1.060.750.75 0 0 0-0.53-0.22H3.75Zm0 6a0.750.75 0 0 0-0.530.220.750.75 0 0 0 0 1.06c0.140.140.330.220.530.22h5.5c0.2 0 0.39-0.080.53-0.22a0.750.75 0 0 0 0-1.060.750.75 0 0 0-0.53-0.22h-5.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcUnwrap24;
