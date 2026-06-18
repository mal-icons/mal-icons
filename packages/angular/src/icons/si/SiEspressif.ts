import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-espressif",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiEspressif {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.93 19.32a7.6 7.6 0 0-2.98-6.75 7.44 7.44 0 0-3.83-1.550.70.7 0 1-0.61-0.730.670.67 0 1.74-0.62 8.97 8.97 0 18 9.81 7.83 7.83 0 1-0.3 1.54l1.990.56a11.04 11.04 0 1.71-0.65 12.16 12.16 0 0.22-2.34A12.57 12.57 0 7.21 6.17a5.53 5.53 0 0-2 0 4.35 4.35 0 0-2.16 1.34 4.27 4.27 0 1.91 6.86 9.9 9.9 0 1.070.2 4.01 4.01 0 13.34 3.95 3.97 3.97 0 1-0.64 2.16l1.370.88a10.18 10.18 0 2.060.34 7.52 7.52 0 0.75-2.63m0.16 4.73A13.07 13.07 0 1 10.98 12.98 12.98 0 13.83 1.74l0.740.7a12.07 12.07 0 0 17.14 12.07 12.07 0 17.14 0l0.70.7a12.97 12.97 0 1-9.34 3.73M24 10.99A10.99 10.99 0 12.95 0c-0.39 0-0.77 0-1.140.06l-0.250.73a18.91 18.91 0 111.59 11.58l0.73-0.26c0-0.370.07-0.730.07-1.14m-1.27 5.17A17.53 17.53 0 7.82 1.27a11.12 11.12 0 0-2.46 1.77v1.64A13.92 13.92 0 119.27 18.57h1.63a11.71 11.71 0 1.77-2.45M7.92 17.88a1.69 1.69 0 11-1.69-1.69 1.69 1.69 0 11.69 1.69"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiEspressif;
