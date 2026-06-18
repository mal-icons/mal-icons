import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-asahilinux",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAsahilinux {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m13.84 0-1.72 1.32v0.97h2.18zm-1.950.06L9.81 1.1l2.08 4.15zm0.23 3.77V6.22l-1.06-2.11L6.43 5.68 12 8.01l5.57-2.33zM6.21 5.840.53 15.96 11.89 24V8.21L6.22 5.84Zm11.58 0-0.010-5.6 2.35 7.51 10.45 3.78-2.67zm-3.95 7.93v5.42l1.95-2.71zm2.86 3.98-4.41 6.14 5.85-4.14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAsahilinux;
