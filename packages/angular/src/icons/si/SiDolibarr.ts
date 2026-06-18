import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dolibarr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDolibarr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.27 0a3.18 3.17 0 0 0-3.18 3.17 3.18 3.17 0 0 0 3.18 3.17 3.18 3.17 0 0 0 3.18-3.17A3.18 3.17 0 0 0 20.27 0ZM0.550.35v23.65H7.63L7.64 7.1h2.4c4.07 0 6.1 1.6 6.1 4.81 0 3.41-2.07 5.12-6.2 5.12H8.79v6.97s1.680.01 2.110.01c3.67 0 6.67-1.12 9-3.38 2.33-2.25 3.5-5.15 3.5-8.71 0-2.07-0.42-3.9-1.27-5.49a3.8 3.8 0 0 1-1.860.5c-0.98 0-1.96-0.4-2.65-1.1a3.78 3.78 0 0 1-1.1-2.65c0-0.530.12-1.060.34-1.55C14.910.78 12.560.35 9.790.35Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDolibarr;
