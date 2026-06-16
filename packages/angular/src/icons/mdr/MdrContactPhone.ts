import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-contact-phone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrContactPhone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 3H2C0.9 3 0 3.9 0 5v14c0 1.10.9 2 2 2h20c1.1 0 1.99-0.9 1.99-2L24 5c0-1.1-0.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.39c0.16 0 0.30.070.40.2l1.1 1.45c0.150.20.130.48-0.050.65l-1.36 1.36c-0.180.18-0.480.2-0.670.04a7.56 7.56 0 0 1-2.38-3.71 7.25 7.25 0 0 1 0-3.99 7.51 7.51 0 0 1 2.38-3.71c0.2-0.170.49-0.140.670.04l1.36 1.36c0.180.180.20.460.050.65l-1.1 1.45a0.480.48 0 0 1-0.40.2h-1.39c-0.220.63-0.35 1.3-0.35 2s0.13 1.380.35 2.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrContactPhone;
