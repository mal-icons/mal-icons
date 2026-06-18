import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-pandas",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPandas {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.92 0h2.62v18.1h-2.62zm-4.13 12.94h2.62v2.57h-2.62zm0-7.04h2.62v5.45h-2.62zm0 11.2h2.62v5.45h-2.62zM4.46 5.9h2.62V24H4.46zm4.21 2.56h2.62v2.57H8.67zm0 4.15h2.62v5.45H8.67zm0-11.19h2.62v5.45H8.67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPandas;
