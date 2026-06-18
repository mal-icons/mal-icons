import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-band-aid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBandAid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.11 21.89a5.96 5.96 0 0 0 4.24-1.76l7.78-7.78a6.01 6.01 0 0 0 0-8.48 5.97 5.97 0 0 0-4.24-1.76 5.96 5.96 0 0 0-4.24 1.76l-7.78 7.78a6.01 6.01 0 0 0 0 8.49 5.97 5.97 0 0 0 4.24 1.76zm-2.83-8.83 7.78-7.78a3.98 3.98 0 0 1 2.83-1.17c1.07 0 2.070.42 2.83 1.17a4.01 4.01 0 0 1 0 5.66l-7.78 7.78a3.98 3.98 0 0 1-2.83 1.17 3.98 3.98 0 0 1-2.83-1.17 4.01 4.01 0 0 1 0-5.66z"}],["circle",{"cx":"9","cy":"12","r":"1"}],["circle",{"cx":"15","cy":"12","r":"1"}],["circle",{"cx":"12","cy":"15","r":"1"}],["circle",{"cx":"12","cy":"9","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBandAid;
