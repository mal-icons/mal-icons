import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-pentagon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPentagon {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.69 1.55a0.50.5 0 0 1 0.63 0l6.26 5.09a0.50.5 0 0 1 0.160.54l-2.36 7.48a0.50.5 0 0 1-0.480.35H4.1a0.50.5 0 0 1-0.48-0.35L1.26 7.17a0.50.5 0 0 1 0.16-0.54l6.26-5.09Zm8.21 5.28a0.50.5 0 0 0-0.16-0.54L8.320.26a0.50.5 0 0 0-0.63 0L0.26 6.29a0.50.5 0 0 0-0.160.54l2.79 8.83a0.50.5 0 0 0 0.480.35h9.27a0.50.5 0 0 0 0.48-0.35l2.79-8.83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPentagon;
