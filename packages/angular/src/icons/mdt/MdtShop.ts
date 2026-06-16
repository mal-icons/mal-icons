import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-shop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtShop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 19h16V8H4v11zM9 9l7.5 4L9 18V9z","opacity":".3"}],["path",{"d":"M16 6V4c0-1.11-0.89-2-2-2h-4c-1.11 0-2 0.89-2 2v2H2v13c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6h-6zm-6-2h4v2h-4V4zm10 15H4V8h16v11zM9 9v9l7.5-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtShop;
