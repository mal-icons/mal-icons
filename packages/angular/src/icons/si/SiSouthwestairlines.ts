import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-southwestairlines",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSouthwestairlines {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.16 2.42C21.04 1.22 19.350.58 17.440.58c-2.06 0-3.640.68-4.72 1.27 2.06 1.16 6.53 3.75 11.18 7.160.08-0.450.11-0.940.11-1.39-0.04-2.17-0.67-4.01-1.84-5.21zm1.35 8.21C18.19 6.24 15 4.03 11.55 1.97 10.61 1.41 8.780.58 6.680.58 4.690.58 3 1.22 1.84 2.42 1.09 3.210.56 4.180.26 5.38 3 7.29 10.46 12.66 18 18.58c2.51-2.36 4.61-5.1 5.51-7.95zM0 7.78c0 6.15 6.49 11.85 12 15.64 1.58-1.09 3.23-2.33 4.8-3.71A736.87 736.87 0 0 0 0.15 6.13C0.04 6.62 0 7.18 0 7.78Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSouthwestairlines;
