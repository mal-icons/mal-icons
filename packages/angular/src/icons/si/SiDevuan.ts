import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-devuan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDevuan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0.42C42.52 10.56 2.3 18.81 2.3 18.81c-0.790.13-1.430.54-1.82 1.17-0.430.7-0.47 1.66-0.07 2.330.490.81 1.11 1.1 1.65 1.220.850.19 1.53-0.11 1.53-0.11s20.56-6.11 20.41-12.21C23.92 8.13 17.69 2.95 0 0.42"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDevuan;
