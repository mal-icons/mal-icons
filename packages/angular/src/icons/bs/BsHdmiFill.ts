import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-hdmi-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHdmiFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 5a1 1 0 0 0-1 1v3.29c0 0.390.320.710.710.710.19 0 0.370.080.50.21l0.50.5a1 1 0 0 0 0.710.29h11.17a1 1 0 0 0 0.71-0.29l0.5-0.5a0.70.7 0 0 1 0.5-0.21c0.39 0 0.71-0.320.71-0.71V6a1 1 0 0 0-1-1zm1.5 2h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1 0-1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHdmiFill;
