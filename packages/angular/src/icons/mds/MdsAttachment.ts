import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-attachment",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAttachment {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.5 16H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h12.5a2.5 2.5 0 0 1 0 5H9c-0.55 0-1-0.45-1-1s0.45-1 1-1h9.5V9.5H9a2.5 2.5 0 0 0 0 5h10.5c2.21 0 4-1.79 4-4s-1.79-4-4-4H7c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5h11.5V16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAttachment;
