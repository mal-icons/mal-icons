import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-person-add-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPersonAdd24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 9.5a5 5 0 1 1 7.92 4.06 7.97 7.97 0 0 1 5.02 7.170.750.75 0 1 1-1.50.04 6.47 6.47 0 0 0-12.93 0 0.750.75 0 0 1-1.5-0.04 7.97 7.97 0 0 1 5.06-7.18A4.99 4.99 0 0 1 4 9.5ZM9 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm10.25-5a0.750.75 0 0 1 0.750.75V4h2.25a0.750.75 0 0 1 0 1.5H20v2.25a0.750.75 0 0 1-1.5 0V5.5h-2.25a0.750.75 0 0 1 0-1.5h2.25V1.75a0.750.75 0 0 1 0.75-0.75Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPersonAdd24;
