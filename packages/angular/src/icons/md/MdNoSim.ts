import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-no-sim",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdNoSim {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.26 21.21 3.79 3.74 2.38 5.15l2.74 2.74-0.120.12V19c0 1.10.9 2 2 2h10c0.35 0 0.68-0.10.97-0.26l1.88 1.88 1.41-1.41zM7 19V9.77L16.23 19H7zm3.84-14H17v9.11l2 2V5c0-1.1-0.9-2-2-2h-6.99L7.95 5.06l1.41 1.41L10.84 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdNoSim;
