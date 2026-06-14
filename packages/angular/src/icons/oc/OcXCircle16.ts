import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-x-circle-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcXCircle16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.34 2.34h0a8 8 0 0 1 11.31 11.31A8 8 0 0 1 0.23 10.09a8 8 0 0 1 2.11-7.75Zm1.06 10.25a6.5 6.5 0 1 0 9.11-9.27 6.5 6.5 0 0 0-9.11 9.28ZM6.03 4.97 8 6.94l1.97-1.97a0.750.75 0 0 1 1.270.330.750.75 0 0 1-0.210.73L9.06 8l1.97 1.97a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21L8 9.06l-1.97 1.97a0.750.75 0 0 1-1.27-0.330.750.75 0 0 1 0.22-0.73L6.94 8 4.97 6.03a0.750.75 0 0 1 0.02-1.040.750.75 0 0 1 1.04-0.02Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcXCircle16;
