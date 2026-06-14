import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sign-in-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSignIn24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3.25c0-0.970.78-1.75 1.75-1.75h5.5a0.750.75 0 0 1 0 1.5h-5.5a0.250.25 0 0 0-0.250.25v17.5c0 0.140.110.250.250.25h5.5a0.750.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 3 20.75Zm9.99 9.5 3.3 3.48a0.750.75 0 0 1-1.09 1.03l-4.5-4.75a0.750.75 0 0 1 0-1.03l4.5-4.75a0.750.75 0 0 1 1.09 1.03l-3.3 3.48h8.26a0.750.75 0 0 1 0 1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSignIn24;
