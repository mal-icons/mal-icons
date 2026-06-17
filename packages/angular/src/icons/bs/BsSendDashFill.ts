import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-send-dash-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSendDashFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.960.69a0.50.5 0 0 0-0.65-0.65L0.77 5.86H0.77l-0.450.18a0.50.5 0 0 0-0.080.89l0.410.2600 5 3.18 1.59 2.5C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.03-4.47zm-1.83 1.89L6.64 10.07l-0.21-0.34a0.50.5 0 0 0-0.15-0.15l-0.34-0.21 7.49-7.49 1.18-0.47z"}],["path",{"d":"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-5.5 0a0.50.5 0 0 0 0.50.5h3a0.50.5 0 0 0 0-1h-3a0.50.5 0 0 0-0.50.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSendDashFill;
