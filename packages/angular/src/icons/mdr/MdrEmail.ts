import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-email",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEmail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-1.990.9-1.99 2L2 18c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-0.4 4.25-7.07 4.42c-0.320.2-0.740.2-1.06 0L4.4 8.25a0.850.85 0 1 1 0.9-1.44L12 11l6.7-4.19a0.850.85 0 1 1 0.9 1.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEmail;
