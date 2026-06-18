import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-webrtc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWebrtc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120.36c-2.83 0-5.15 2.17-5.38 4.94a5.41 5.41 0 0-1.22-0.14C2.42 5.16 0 7.58 0 10.56c0 2.22 1.34 4.13 3.26 4.96a5.37 5.37 0 0-0.74 2.72c0 2.98 2.42 5.4 5.4 5.4 1.66 0 3.15-0.75 4.14-1.930.99 1.18 2.48 1.93 4.14 1.93 2.98 0 5.4-2.42 5.4-5.4 0-0.97-0.26-1.88-0.71-2.67C22.73 14.71 24 12.84 24 10.68c0-2.98-2.42-5.4-5.4-5.4-0.42 0-0.820.05-1.210.14C17.21 2.59 14.870.36 120.36zm-5.72 6.87h10.59c0.75 0 1.350.61 1.35 1.35v7.65c0 0.74-0.61 1.35-1.35 1.35h-3.61l-7.24 3.55 1.1-3.55h-0.84c-0.75 0-1.35-0.6-1.35-1.35V8.58c0-0.740.61-1.35 1.35-1.35Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWebrtc;
