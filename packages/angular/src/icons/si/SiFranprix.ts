import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-franprix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFranprix {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 6.31c3.69 0 6.32-3.07 6.13-6.29-2.12-0.17-5.070.79-6.13 3.79C10.940.81 7.99-0.15 5.870.02 5.68 3.23 8.31 6.31 12 6.31m11 6.96c-0.14-3.41-2.82-6.36-6.55-6.36-1.69 0-3.240.64-4.45 1.74-1.22-1.11-2.76-1.74-4.45-1.74-3.73 0-6.41 2.95-6.55 6.36C0.76 19.19 5.91 24 12 24c6.09 0 11.24-4.81 11-10.73"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFranprix;
