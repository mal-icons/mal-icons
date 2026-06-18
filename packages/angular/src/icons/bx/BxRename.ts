import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-rename",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxRename {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.01 6h-1v2h1v8h-1v2h1c1.1 0 2-0.9 2-2v-8c0-1.1-0.9-2-2-2zm-14 4H15v4H6.01z"}],["path",{"d":"M17.01 18V4H20V2h-8v2h3.01v2h-11c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2h11V20H12v2h8v-2h-2.99v-2zm-13-2v-8h11v8h-11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxRename;
