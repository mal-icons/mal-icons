import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-pentagon-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPentagonFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.690.26a0.50.5 0 0 1 0.63 0l7.42 6.03a0.50.5 0 0 1 0.160.54l-2.79 8.83a0.50.5 0 0 1-0.480.35H3.37a0.50.5 0 0 1-0.48-0.35L0.1 6.83a0.50.5 0 0 1 0.16-0.54l7.42-6.03Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPentagonFill;
