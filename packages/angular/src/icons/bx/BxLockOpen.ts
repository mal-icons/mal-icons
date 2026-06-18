import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-lock-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxLockOpen {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c1.65 0 3 1.35 3 3h2c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-9c0-1.1-0.9-2-2-2H9V7c0-1.65 1.35-3 3-3zm6 16H13v-2.28c0.6-0.35 1-0.98 1-1.72 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.740.41 1.38 1 1.72V20H6v-9h12l0 9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxLockOpen;
