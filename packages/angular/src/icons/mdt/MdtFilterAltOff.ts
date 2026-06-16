import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-filter-alt-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFilterAltOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.83 6h8.12l-3.57 4.55z","opacity":".3"}],["path",{"d":"m16.95 6-3.57 4.55 1.43 1.43c1.03-1.31 4.98-6.37 4.98-6.37A11 0 0 0 19 4H6.83l2 2h8.12zM2.81 2.81 1.39 4.22 10 13v6c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1v-2.17l5.78 5.78 1.41-1.41L2.81 2.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFilterAltOff;
