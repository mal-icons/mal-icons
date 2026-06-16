import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-inventory-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtInventory2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 7h16V3.98L4 4zm1 13h14V9H5v11zm4-8h6v2H9v-2z","opacity":".3"}],["path",{"d":"M20 2H4c-1 0-2 0.9-2 2v3.01c0 0.720.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c0.9 0 2-0.9 2-2V8.7c0.57-0.35 1-0.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4l16-0.02V7z"}],["path",{"d":"M9 12h6v2H9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtInventory2;
