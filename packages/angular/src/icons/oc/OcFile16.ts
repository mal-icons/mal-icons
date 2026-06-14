import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-file-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFile16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 1.75C2 0.78 2.78 0 3.75 0h6.59c0.46 0 0.910.18 1.240.51l2.91 2.91c0.330.330.510.770.51 1.24v9.59A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v12.5c0 0.140.110.250.250.25h9.5a0.250.25 0 0 0 0.25-0.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.750.06V4.25c0 0.140.110.250.250.25h2.69l-0.01-0.01-2.91-2.91-0.01-0.01Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFile16;
