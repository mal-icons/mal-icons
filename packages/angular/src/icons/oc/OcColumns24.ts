import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-columns-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcColumns24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 2h5.5c0.97 0 1.750.78 1.75 1.75v16.5A1.75 1.75 0 0 1 9.25 22h-5.5A1.75 1.75 0 0 1 2 20.25V3.75C2 2.78 2.78 2 3.75 2Zm11 0h5.5c0.97 0 1.750.78 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22h-5.5A1.75 1.75 0 0 1 13 20.25V3.75c0-0.970.78-1.75 1.75-1.75ZM3.5 3.75v16.5c0 0.140.110.250.250.25h5.5a0.250.25 0 0 0 0.25-0.25V3.75a0.250.25 0 0 0-0.25-0.25h-5.5a0.250.25 0 0 0-0.250.25Zm11 0v16.5c0 0.140.110.250.250.25h5.5a0.250.25 0 0 0 0.25-0.25V3.75a0.250.25 0 0 0-0.25-0.25h-5.5a0.250.25 0 0 0-0.250.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcColumns24;
