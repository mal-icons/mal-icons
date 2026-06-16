import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-dock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDock {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 23h6c0.55 0 1-0.45 1-1s-0.45-1-1-1H9c-0.55 0-1 0.45-1 1s0.45 1 1 1zm7-21.99L8 1c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V3c0-1.1-0.9-1.99-2-1.99zM16 15H8V5h8v10z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDock;
