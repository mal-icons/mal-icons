import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-blocked-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcBlocked24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.64 2.22a0.750.75 0 0 1 0.53-0.22h7.66c0.2 0 0.390.080.530.22l5.42 5.42c0.140.140.220.330.220.53v7.66a0.750.75 0 0 1-0.220.53l-5.42 5.42a0.750.75 0 0 1-0.530.22H8.17a0.750.75 0 0 1-0.53-0.22l-5.42-5.42a0.750.75 0 0 1-0.22-0.53V8.17c0-0.20.08-0.390.22-0.53l5.42-5.42ZM8.48 3.5 3.5 8.48v7.04l4.98 4.98h7.04l4.98-4.98V8.48L15.52 3.5ZM7 11.75a0.750.75 0 0 1 0.75-0.75h8.5a0.750.75 0 0 1 0 1.5h-8.5a0.750.75 0 0 1-0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcBlocked24;
