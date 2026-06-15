import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiStar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M11.48 3.5a0.560.56 0 0 1 1.04 0l2.13 5.11a0.560.56 0 0 0 0.480.35l5.520.44c0.50.040.70.660.320.99l-4.2 3.6a0.560.56 0 0 0-0.180.56l1.29 5.39a0.560.56 0 0 1-0.840.61l-4.72-2.88a0.560.56 0 0 0-0.59 0L6.98 20.54a0.560.56 0 0 1-0.84-0.61l1.29-5.39a0.560.56 0 0 0-0.18-0.56l-4.2-3.6a0.560.56 0 0 1 0.32-0.99l5.52-0.44a0.560.56 0 0 0 0.48-0.34L11.48 3.5Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiStar;
