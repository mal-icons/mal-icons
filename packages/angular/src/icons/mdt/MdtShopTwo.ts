import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-shop-two",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtShopTwo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 7v9h14V7H7zm5 8V8l5.5 3-5.5 4z","opacity":".3"}],["path",{"d":"M3 9H1v11c0 1.110.89 2 2 2h14c1.11 0 2-0.89 2-2H3V9zm15-4V3c0-1.11-0.89-2-2-2h-4c-1.11 0-2 0.89-2 2v2H5v11c0 1.110.89 2 2 2h14c1.11 0 2-0.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9zm-9-1 5.5-4L12 8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtShopTwo;
