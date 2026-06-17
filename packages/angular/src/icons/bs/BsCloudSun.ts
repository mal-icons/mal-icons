import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cloud-sun",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCloudSun {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 8a3.5 3.5 0 0 1 3.5 3.560.50.5 0 0 0 0.620.49A1.5 1.5 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 0.1-40.50.5 0 0 0 0.51-0.37A3.5 3.5 0 0 1 7 8m4.47 3a4.5 4.5 0 0 0-8.72-0.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"}],["path",{"d":"M10.5 1.5a0.50.5 0 0 0-1 0v1a0.50.5 0 0 0 1 0zm3.74 1.96a0.50.5 0 1 0-0.71-0.71l-0.710.71a0.50.5 0 0 0 0.710.71zm-7.78-0.71a0.50.5 0 0 0-0.710.71l0.710.71a0.50.5 0 1 0 0.71-0.71zm1.73 3.37a2 2 0 1 1 3.3 2.2q0.30.420.520.9a3 3 0 1 0-4.84-3.22q0.530.02 1.030.13m4.48 4.07c0.60.22 1.130.59 1.52 1.07a0.50.5 0 0 0 0.04-0.74l-0.71-0.71a0.50.5 0 0 0-0.850.38M14.5 6.5a0.50.5 0 0 0 0 1h1a0.50.5 0 0 0 0-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCloudSun;
