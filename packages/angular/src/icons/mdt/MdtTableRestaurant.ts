import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-table-restaurant",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtTableRestaurant {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m5.18 6-0.85 3h15.34l-0.85-3z","opacity":".3"}],["path",{"d":"m21.96 9.73-1.43-5a11 0 0 0-0.96-0.73H4.43c-0.45 0-0.840.3-0.960.73l-1.43 5c-0.180.630.3 1.270.96 1.27h2.2L4 20h2l0.67-5h10.67l0.66 5h2l-1.2-9H21c0.66 0 1.14-0.640.96-1.27zM6.93 13l0.27-2h9.6l0.27 2H6.93zm-2.6-4 0.86-3h13.63l0.86 3H4.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtTableRestaurant;
