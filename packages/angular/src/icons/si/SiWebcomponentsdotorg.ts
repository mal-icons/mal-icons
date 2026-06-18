import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-webcomponentsdotorg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiWebcomponentsdotorg {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.73 2.23l-0.010.02H5.62L0 11.98l5.62 9.74h12.8l0.040.06 2.13-3.730.52-0.89h-0.01l0.01-0.01-0.63-0.75h0.9l0.01-0.010.010.01L24 11.99l-2.61-4.3900.01-0.01-0.02h-0.94l0.63-0.76-2.61-4.57-0.010.01-0.02-0.04H11.73zM9.11 6.82h6.19l-0.530.76h-0.02l2.4 4.01h0.88l-0.280.330.360.44h-0.96l-2.4 4.01h0.03l0.520.76H9.07l-2.99-5.17 3.02-5.15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiWebcomponentsdotorg;
