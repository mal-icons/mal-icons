import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-blocked-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcBlocked16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.470.22a0.750.75 0 0 1 0.53-0.22h6.01c0.2 0 0.390.080.530.22l4.25 4.25c0.140.140.220.330.220.53v6.01a0.750.75 0 0 1-0.220.53l-4.25 4.25a0.750.75 0 0 1-0.530.22H5a0.750.75 0 0 1-0.53-0.22L0.22 11.53a0.750.75 0 0 1-0.22-0.53V5c0-0.20.08-0.390.22-0.53Zm0.84 1.28L1.5 5.31v5.38L5.31 14.5h5.38l3.81-3.81V5.31L10.69 1.5ZM4 7.75A0.750.75 0 0 1 4.75 7h6.5a0.750.75 0 0 1 0 1.5h-6.5A0.750.75 0 0 1 4 7.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcBlocked16;
