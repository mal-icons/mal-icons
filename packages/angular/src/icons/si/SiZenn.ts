import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-zenn",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiZenn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.26 23.77h4.98c0.26 0 0.5-0.150.65-0.35L19.610.87c0.18-0.29-0.03-0.64-0.38-0.64h-4.72c-0.23 0-0.440.12-0.560.32L0.03 23.36c-0.090.180.030.410.230.41zM17.45 23.42l6.48-10.41c0.21-0.32-0.03-0.73-0.41-0.73h-4.69c-0.18 0-0.350.09-0.440.24l-6.65 10.64c-0.180.260.030.620.350.62h4.78c0.2300.47-0.120.59-0.35z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiZenn;
