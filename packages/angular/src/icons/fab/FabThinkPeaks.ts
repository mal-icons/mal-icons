import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-think-peaks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabThinkPeaks {
  readonly viewBox = "0 0 576 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M465.4 409.4l87.1-150.2-32-0.3-55.1 95L259.2 0 23 407.4l32 0.3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.50.1-235.8-404.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabThinkPeaks;
