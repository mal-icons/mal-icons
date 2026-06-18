import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-toyota",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiToyota {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3.85C5.22 3.85 0 7.3 0 12c0 4.7 5.22 8.15 12 8.15S24 16.7 24 12c0-4.7-5.22-8.15-12-8.15zm7.33 3.84c0 1.08-1.72 1.91-4.49 2.25-0.26-2.58-1-4.28-1.96-4.91 2.950.18 6.45 1.23 6.45 2.67zM12 16.4c-0.96 0-1.75-1.5-1.81-4.390.580.05 1.180.07 1.810.070.63 0 1.23-0.02 1.81-0.07-0.06 2.89-0.85 4.39-1.81 4.39zm0-6.31c-0.59 0-1.15-0.02-1.69-0.050.26-1.730.92-3.15 1.69-3.150.77 0 1.43 1.42 1.69 3.15-0.530.03-1.10.05-1.690.05zm-0.88-5.07c-0.960.63-1.71 2.33-1.96 4.92C6.39 9.6 4.67 8.77 4.67 7.69c0-1.44 3.5-2.49 6.45-2.67zM2.04 11.68a5.27 5.27 0 11.05-3.16c0.27 1.55 2.52 2.88 5.97 3.37V12c0 3.770.88 6.2 2.09 6.97-5.11-0.32-9.11-3.48-9.11-7.29zm10.82 7.29c1.21-0.77 2.09-3.2 2.09-6.97v-0.11c3.45-0.49 5.7-1.83 5.97-3.37a5.26 5.26 0 11.05 3.17c0 3.81-4.01 6.97-9.11 7.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiToyota;
