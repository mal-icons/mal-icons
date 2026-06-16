import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-sell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSell {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 4v7.17L12.83 20 20 12.83 11.17 4H4zm2.5 4C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z","opacity":".3"}],["path",{"d":"m21.41 11.41-8.83-8.83c-0.37-0.37-0.88-0.58-1.41-0.58H4c-1.1 0-2 0.9-2 2v7.17c0 0.530.21 1.040.59 1.41l8.83 8.83c0.780.78 2.050.78 2.83 0l7.17-7.17c0.78-0.780.78-2.04-0.01-2.83zM12.83 20 4 11.17V4h7.17L20 12.83 12.83 20z"}],["circle",{"cx":"6.5","cy":"6.5","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSell;
