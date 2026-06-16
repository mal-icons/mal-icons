import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-cell-tower",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdCellTower {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m7.3 14.7 1.2-1.2c-1-1-1.5-2.3-1.5-3.5 0-1.30.5-2.6 1.5-3.5L7.3 5.3c-1.3 1.3-2 3-2 4.7s0.7 3.4 2 4.7zM19.1 2.9l-1.2 1.2c1.6 1.6 2.4 3.8 2.4 5.9 0 2.1-0.8 4.3-2.4 5.9l1.2 1.2c2-2 2.9-4.5 2.9-7.1 0-2.6-1-5.1-2.9-7.1z"}],["path",{"d":"M6.1 4.1 4.9 2.9C3 4.9 2 7.4 2 10c0 2.6 1 5.1 2.9 7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9 0-2.10.8-4.3 2.4-5.9zm10.6 10.6c1.3-1.3 2-3 2-4.7-0.1-1.7-0.7-3.4-2-4.7l-1.2 1.2c1 1 1.5 2.3 1.5 3.5 0 1.3-0.5 2.6-1.5 3.5l1.2 1.2zM14.5 10a2.5 2.5 0 0 0-5 0c0 0.760.34 1.420.87 1.88L7 22h2l0.67-2h4.67l0.66 2h2l-3.37-10.12c0.53-0.460.87-1.120.87-1.88zm-4.17 8L12 13l1.67 5h-3.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdCellTower;
