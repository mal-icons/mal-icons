import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mezmo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMezmo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.54 18.08c0 1.280.58 2.18 1.93 2.18 1.02 0 1.73-0.77 2.12-1.86l3.59-10.37c0.29-0.860.74-1.34 1.64-1.340.68 0 1.250.48 1.25 1.34v11.78a0.170.17 0 0 0 0.20.2h2.54a0.170.17 0 0 0 0.2-0.19V7.97c0-2.37-1.83-4.22-4.11-4.22-2.21 0-3.69 1.37-4.4 3.46l-1.7 4.99c-0.060.2-0.10.26-0.20.26a0.120.12 0 0 1-0.13-0.13V7.97c0-2.37-1.83-4.22-4.11-4.22-2.21 0-3.69 1.37-4.4 3.46l-1.7 4.99c-0.060.2-0.10.26-0.20.26a0.120.12 0 0 1-0.13-0.13V4.19a0.170.17 0 0 0-0.19-0.19H0.2a0.170.17 0 0 0-0.20.2v13.89c0 1.280.59 2.17 1.93 2.17 1.03 0 1.73-0.77 2.12-1.86L7.64 8.03c0.29-0.80.8-1.34 1.64-1.340.68 0 1.260.48 1.26 1.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMezmo;
