import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-delete",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDelete {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 19c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2v10zM18 4h-2.5l-0.71-0.71c-0.18-0.18-0.44-0.29-0.7-0.29H9.91c-0.26 0-0.520.11-0.70.29L8.5 4H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDelete;
