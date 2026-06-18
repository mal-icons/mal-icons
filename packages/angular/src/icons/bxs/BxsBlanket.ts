import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-blanket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsBlanket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h12c1.65 0 3-1.35 3-3s-1.35-3-3-3H6v2h13a1 1 0 0 1 0 2H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h13c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM4 13h0L4 13V13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsBlanket;
