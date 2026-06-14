import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sign-in-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSignIn16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 2.75C2 1.78 2.78 1 3.75 1h2.5a0.750.75 0 0 1 0 1.5h-2.5a0.250.25 0 0 0-0.250.25v10.5c0 0.140.110.250.250.25h2.5a0.750.75 0 0 1 0 1.5h-2.5A1.75 1.75 0 0 1 2 13.25Zm6.56 4.5h5.69a0.750.75 0 0 1 0 1.5H8.56l1.97 1.97a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21L6.22 8.53a0.750.75 0 0 1 0-1.06l3.25-3.25a0.750.75 0 0 1 1.270.330.750.75 0 0 1-0.210.73Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSignIn16;
