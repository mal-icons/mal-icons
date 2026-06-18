import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsStar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.95 9.18a1 1 0 0 0-0.87-0.68l-5.7-0.45-2.47-5.46a11 0 0 0-1.820L8.62 8.05l-5.70.45a1 1 0 0 0-0.62 1.71l4.21 4.11-1.49 6.45a1 1 0 0 0 1.53 1.06L12 18.2l5.45 3.63a1 1 0 0 0 1.52-1.11l-1.83-6.4 4.54-4.08c0.3-0.270.41-0.690.28-1.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsStar;
