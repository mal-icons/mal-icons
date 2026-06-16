import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-celebration",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfCelebration {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2 22 14-5-9-9zm12.53-9.47 5.59-5.59a1.25 1.25 0 0 1 1.77 0l0.590.59 1.06-1.06-0.59-0.59a2.76 2.76 0 0 0-3.89 0l-5.59 5.59 1.06 1.06zm-4.47-5.65-0.590.59 1.06 1.060.59-0.59a2.76 2.76 0 0 0 0-3.89l-0.59-0.59-1.06 1.070.590.59c0.480.480.48 1.28 0 1.76zm7 5-1.59 1.59 1.06 1.06 1.59-1.59a1.25 1.25 0 0 1 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61a2.76 2.76 0 0 0-3.89 0zm-2-6-3.59 3.59 1.06 1.06 3.59-3.59a2.76 2.76 0 0 0 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c0.480.490.48 1.29 0 1.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfCelebration;
