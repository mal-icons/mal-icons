import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-cloud-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCloudOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 15c0-1.66-1.34-3-3-3h-1.5v-0.5C17.5 8.46 15.04 6 12 6c-0.77 0-1.490.17-2.160.46L20.79 17.4c0.73-0.55 1.21-1.41 1.21-2.4zM2 14c0 2.21 1.79 4 4 4h9.73l-8-8H6c-2.21 0-4 1.79-4 4z","opacity":".3"}],["path",{"d":"M19.35 10.04A7.49 7.49 0 0 0 12 4c-1.33 0-2.570.36-3.650.97l1.49 1.49C10.51 6.17 11.23 6 12 6c3.04 0 5.5 2.46 5.5 5.5v0.5H19a3 3 0 0 1 1.79 5.4l1.41 1.41c1.09-0.92 1.8-2.27 1.8-3.81 0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.77 2.77h-0.42A5.99 5.99 0 0 0 0 14c0 3.31 2.69 6 6 6h11.73l2 2 1.41-1.41L4.41 3.86 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCloudOff;
