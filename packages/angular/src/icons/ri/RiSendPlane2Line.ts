import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-send-plane-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSendPlane2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.5 1.35C3.58 1.35 3.67 1.37 3.74 1.41L22.2 11.56C22.45 11.69 22.53 12 22.4 12.24C22.35 12.32 22.29 12.39 22.2 12.44L3.74 22.59C3.5 22.73 3.19 22.64 3.06 22.4C3.02 22.32 3 22.24 3 22.15V1.85C3 1.57 3.22 1.35 3.5 1.35ZM5 4.38V11H10V13H5V19.62L18.85 12L5 4.38Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSendPlane2Line;
