import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-hdr-on-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHdrOnSelect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 18.5v-1c0-0.83-0.67-1.5-1.5-1.5H14c-0.55 0-1 0.45-1 1v4.31c0 0.380.310.690.690.69h0.11c0.38 0 0.69-0.310.69-0.69V20h1.1l0.72 1.59c0.110.250.360.410.630.410.5 0 0.83-0.510.64-0.97l-0.48-1.13c0.5-0.30.9-0.80.9-1.4zm-1.5 0h-2v-1h2v1zm-13-0.5h-2v-1.25c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.75v4.5c0 0.410.340.750.750.75s0.75-0.340.75-0.75V19.5h2v1.75c0 0.410.340.750.750.75s0.75-0.340.75-0.75v-4.5c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.75V18zm6.5-2H7.5c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1H10c0.82 0 1.5-0.67 1.5-1.5v-3c0-0.83-0.68-1.5-1.5-1.5zm0 4.5H8v-3h2v3zm13.25-0.5H22v1.25c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75V20h-1.25c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75h1.25v-1.25c0-0.410.34-0.750.75-0.75s0.750.340.750.75v1.25h1.25c0.41 0 0.750.340.750.75s-0.340.75-0.750.75zM12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m0-2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHdrOnSelect;
