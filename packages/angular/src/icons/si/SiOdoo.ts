import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-odoo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOdoo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.1 15.8c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9zm0-1.2c0.940 1.7-0.76 1.7-1.70-0.94-0.76-1.7-1.7-1.7h0c-0.940-1.70.76-1.7 1.700.940.76 1.7 1.7 1.7zm-6.07 1.2c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9zm0-1.2c0.940 1.7-0.76 1.7-1.70-0.94-0.76-1.7-1.7-1.7h0c-0.940-1.70.76-1.7 1.700.940.76 1.7 1.7 1.7zM11.87 12.86c0 1.62-1.3 2.94-2.9 2.94s-2.9-1.31-2.9-2.94 1.18-2.86 2.9-2.86c0.64 0 1.220.13 1.70.48v-1.68a0.60.6 0 0 1 1.2 0v4.05h0zm-2.9 1.74c0.940 1.7-0.76 1.7-1.70-0.94-0.76-1.7-1.7-1.7h0c-0.940-1.70.76-1.7 1.700.940.76 1.7 1.7 1.7zm-6.07 1.2C1.3 15.8 0 14.5 0 12.9s1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9c0 1.6-1.3 2.9-2.9 2.9zm0-1.2c0.940 1.7-0.76 1.7-1.70-0.94-0.76-1.7-1.7-1.7h0c-0.940-1.70.76-1.7 1.700.940.76 1.7 1.7 1.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOdoo;
