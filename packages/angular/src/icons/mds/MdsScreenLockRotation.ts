import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-screen-lock-rotation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsScreenLockRotation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.52 21.48A10.49 10.49 0 0 1 1.55 13H0.05C0.56 19.16 5.71 24 12 24l0.66-0.03-3.81-3.82-1.33 1.33zM20.05 4v-0.36c0-1.31-0.94-2.5-2.24-2.63a2.5 2.5 0 0 0-2.76 2.49V4h-1v6h7V4h-1zm-0.8 0h-3.4v-0.5c0-0.940.76-1.7 1.7-1.7s1.70.76 1.7 1.7V4zm0.48 7.2-1.41 1.41 2.22 2.22-5.66 5.66L3.56 9.17l5.66-5.66 2.1 2.1 1.41-1.41L9.220.690.74 9.17l14.14 14.14 8.48-8.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsScreenLockRotation;
