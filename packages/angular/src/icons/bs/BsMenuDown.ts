import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-menu-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMenuDown {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.650.15a0.50.5 0 0 1 0.71 0L10.21 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.79zM1 7v3h14V7zm14-1V4a1 1 0 0 0-1-1h-3.79a1 1 0 0 1-0.71-0.29L8 1.21l-1.5 1.5A1 1 0 0 1 5.79 3H2a1 1 0 0 0-1 1v2zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4.5a0.50.5 0 0 1 0.5-0.5h8a0.50.5 0 0 1 0 1h-8a0.50.5 0 0 1-0.5-0.5m0 4a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5m0 4a0.50.5 0 0 1 0.5-0.5h6a0.50.5 0 0 1 0 1h-6a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMenuDown;
