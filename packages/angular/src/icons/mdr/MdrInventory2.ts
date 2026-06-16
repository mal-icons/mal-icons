import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-inventory-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrInventory2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1 0-2 0.9-2 2v3.01c0 0.720.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c0.9 0 2-0.9 2-2V8.7c0.57-0.35 1-0.97 1-1.69V4c0-1.1-1-2-2-2zm-6 12h-4c-0.55 0-1-0.45-1-1s0.45-1 1-1h4c0.55 0 1 0.45 1 1s-0.45 1-1 1zm6-7H4V4h16v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrInventory2;
