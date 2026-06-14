import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-stack-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcStack16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.120.39a1.75 1.75 0 0 1 1.76 0l5 2.9c0.830.480.83 1.68 0 2.16L8.88 8.36a1.75 1.75 0 0 1-1.76 0L2.12 5.46a1.25 1.25 0 0 1 0-2.16ZM8.13 1.69a0.250.25 0 0 0-0.25 0l-4.63 2.69 4.63 2.69a0.250.25 0 0 0 0.25 0l4.63-2.68ZM1.6 7.79a0.750.75 0 0 1 1.02-0.27l5.25 3.04a0.250.25 0 0 0 0.25 0l5.25-3.04a0.750.75 0 0 1 0.75 1.3l-5.25 3.04a1.75 1.75 0 0 1-1.76 0L1.87 8.81A0.750.75 0 0 1 1.6 7.79Zm0 3.5a0.750.75 0 0 1 1.02-0.27l5.25 3.04a0.250.25 0 0 0 0.25 0l5.25-3.04a0.750.75 0 0 1 0.75 1.3l-5.25 3.04a1.75 1.75 0 0 1-1.76 0l-5.25-3.04a0.750.75 0 0 1-0.27-1.02Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcStack16;
