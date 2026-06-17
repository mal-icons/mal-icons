import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-send-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSendFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.960.69a0.50.5 0 0 0-0.65-0.65L0.77 5.86H0.77l-0.450.18a0.50.5 0 0 0-0.080.89l0.410.2600 5 3.18 3.18 5000.260.41a0.50.5 0 0 0 0.89-0.08zm-1.83 1.89L6.64 10.07l-0.21-0.34a0.50.5 0 0 0-0.15-0.15l-0.34-0.21 7.49-7.49 1.18-0.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSendFill;
