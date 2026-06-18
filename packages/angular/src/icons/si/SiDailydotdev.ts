import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dailydotdev",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDailydotdev {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.29 5.71a1.41 1.41 0 0 0-1.99 0L4.72 17.3l1.32-2.65-2.65-2.65 3.31-3.31 2.65 2.65 1.99-1.99-3.64-3.64a1.41 1.41 0 0 0-1.99 0L0.41 11a1.4 1.4 0 0 0 0 1.99l4.31 4.30.990.99a1.41 1.41 0 0 0 1.99 0L19.29 6.7l-0.99-0.99Zm-0.33 3.65 2.65 2.65-4.31 4.31a1.4 1.4 0 1 0 1.99 1.99l5.3-5.3a1.4 1.4 0 0 0 0-1.99l-4.3-4.3-1.32 2.65Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDailydotdev;
