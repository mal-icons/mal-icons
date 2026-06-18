import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-temporal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTemporal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.21 7.79C15.64 3.55 14.2 0 12 0 9.8 0 8.36 3.55 7.79 7.79 3.55 8.36 0 9.8 0 12c0 2.2 3.55 3.64 7.79 4.21C8.36 20.45 9.8 24 12 24c2.2 0 3.64-3.55 4.21-7.79C20.45 15.64 24 14.2 24 12c0-2.2-3.55-3.64-7.79-4.21Zm-8.55 7.17c-4.07-0.59-6.44-1.93-6.44-2.97 0-1.04 2.37-2.38 6.44-2.97-0.090.98-0.14 1.98-0.14 2.97 0 0.990.05 1.990.14 2.97zM12 1.22c1.04 0 2.38 2.37 2.97 6.44a32.72 32.72 0 0 0-5.94 0c0.59-4.07 1.93-6.44 2.97-6.44Zm4.34 13.75c-0.20.03-1.020.13-1.230.15-0.020.21-0.12 1.03-0.14 1.23-0.59 4.07-1.93 6.44-2.97 6.44-1.04 0-2.38-2.37-2.97-6.44-0.03-0.2-0.13-1.02-0.15-1.23a31.83 31.83 0 0 1 0-6.23 31.81 31.81 0 0 1 7.460.15c4.070.59 6.44 1.93 6.44 2.970 1.04-2.37 2.38-6.44 2.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTemporal;
