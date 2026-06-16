import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-hdr-auto-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHdrAutoSelect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 16H7.25c-0.41 0-0.750.34-0.750.75v4.5c0 0.410.340.750.750.75H10c0.83 0 1.5-0.67 1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5zm0 4.5H8v-3h2v3zM4.25 16c-0.41 0-0.750.34-0.750.75V18h-2v-1.25c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.75v4.5c0 0.410.340.750.750.75s0.75-0.340.75-0.75V19.5h2v1.75c0 0.410.340.750.750.75s0.75-0.340.75-0.75v-4.5c0-0.41-0.34-0.75-0.75-0.75zm19 2.5H22v-1.25c0-0.41-0.34-0.75-0.75-0.75s-0.750.34-0.750.75v1.25h-1.25c-0.41 0-0.750.34-0.750.75s0.340.750.750.75h1.25v1.25c0 0.410.340.750.750.75s0.75-0.340.75-0.75V20h1.25c0.41 0 0.75-0.340.75-0.75s-0.34-0.75-0.75-0.75zM16.5 16h-2.75c-0.41 0-0.750.34-0.750.75v4.56c0 0.380.310.690.690.69h0.11c0.38 0 0.69-0.310.69-0.69V20h1.1l0.72 1.59c0.110.250.360.410.630.410.5 0 0.83-0.510.64-0.97l-0.48-1.13c0.5-0.30.9-0.80.9-1.4v-1c0-0.83-0.67-1.5-1.5-1.5zm0 2.5h-2v-1h2v1zM11.97 5.3l-1.02 2.89h2.1L12.03 5.3z"}],["path",{"d":"M12 2C8.69 2 6 4.69 6 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm2.44 9c-0.24 0-0.45-0.15-0.53-0.38l-0.49-1.41h-2.83l-0.5 1.41a0.560.56 0 1 1-1.06-0.38l2.12-5.65a0.910.91 0 0 1 1.7 0l2.12 5.65a0.560.56 0 0 1-0.530.76z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHdrAutoSelect;
