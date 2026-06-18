import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-badge-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsBadgeCheck {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.97 8.52C19.99 8.35 20 8.17 20 8c0-2.38-2.14-4.29-4.52-3.96C14.79 2.8 13.47 2 12 2s-2.790.8-3.48 2.04C6.14 3.71 4 5.62 4 8c0 0.170.010.350.040.52C2.8 9.22 2 10.54 2 12s0.8 2.79 2.04 3.48A3.98 3.98 0 0 0 4 16c0 2.38 2.14 4.28 4.52 3.97C9.21 21.2 10.53 22 12 22s2.79-0.8 3.48-2.03C17.86 20.28 20 18.38 20 16c0-0.17-0.01-0.35-0.04-0.52C21.2 14.79 22 13.47 22 12s-0.8-2.78-2.03-3.48zm-9.01 7.9-3.67-3.71 1.42-1.4 2.26 2.29 4.33-4.29 1.41 1.42-5.75 5.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsBadgeCheck;
