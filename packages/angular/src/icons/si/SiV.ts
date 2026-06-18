import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-v",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiV {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.58 23.5c0.070.19-0.040.35-0.250.35h-6.26c-0.41 0-0.85-0.31-0.99-0.69L0.040.78C-0.10.390.150.120.530.16l6.390.62c0.410.040.840.380.980.77l7.68 21.95zM23.470.16l-6.390.62c-0.410.04-0.840.38-0.980.77l-3.83 10.99 3.68 10.51L23.960.78c0.14-0.38-0.08-0.66-0.48-0.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiV;
