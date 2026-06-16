import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-approval",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrApproval {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 16v4c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-4c0-1.1-0.9-2-2-2H6c-1.1 0-2 0.9-2 2zm13 2H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h10c0.55 0 1 0.45 1 1s-0.45 1-1 1zM12 2C9.54 2 7.48 3.79 7.07 6.13c-0.080.520.06 1.050.36 1.47l3.76 5.26a1 1 0 0 0 1.63 0l3.76-5.26c0.3-0.420.44-0.950.35-1.47A5.02 5.02 0 0 0 12 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrApproval;
