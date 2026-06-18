import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-happy-heart-eyes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsHappyHeartEyes {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zM6.44 8.47A1.49 1.49 0 0 1 8.5 8.4a1.49 1.49 0 0 1 2.070.03c0.60.590.6 1.520.02 2.12l-2.05 2.08-2.08-2.05a1.48 1.48 0 0 1-0.02-2.12zM12 18c-4 0-5-4-5-4h10s-1 4-5 4zm5.59-7.45-2.05 2.08-2.08-2.05a1.49 1.49 0 0 1-0.02-2.12 1.49 1.49 0 0 1 2.07-0.07 1.49 1.49 0 0 1 2.070.03c0.60.590.61 1.520.02 2.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsHappyHeartEyes;
