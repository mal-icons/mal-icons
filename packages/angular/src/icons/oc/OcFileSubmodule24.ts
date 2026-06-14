import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-file-submodule-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFileSubmodule24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4.75C2 3.78 2.78 3 3.75 3h4.97a1.75 1.75 0 0 1 1.460.78l1.41 2.11a0.250.25 0 0 0 0.210.11h8.47c0.97 0 1.750.78 1.75 1.75v11.5A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25Zm12.78 4.97a0.750.75 0 0 0-1.270.330.750.75 0 0 0 0.220.73l1.72 1.72H6.75a0.750.75 0 0 0 0 1.5h8.69l-1.72 1.72a0.750.75 0 0 0 0.33 1.270.750.75 0 0 0 0.73-0.21l3-3a0.750.75 0 0 0 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFileSubmodule24;
