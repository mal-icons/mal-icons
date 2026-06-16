import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-shop-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdShop2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 9H1v11c0 1.110.89 2 2 2h16v-2H3V9z"}],["path",{"d":"M18 5V3c0-1.11-0.89-2-2-2h-4c-1.11 0-2 0.89-2 2v2H5v11c0 1.110.89 2 2 2h14c1.11 0 2-0.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z"}],["path",{"d":"M12 8v7l5.5-3.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdShop2;
