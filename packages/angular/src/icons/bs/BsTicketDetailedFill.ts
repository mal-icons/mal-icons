import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-ticket-detailed-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTicketDetailedFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a0.50.5 0 0 1-0.50.5 1.5 1.5 0 0 0 0 3 0.50.5 0 0 1 0.50.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a0.50.5 0 0 1 0.5-0.5 1.5 1.5 0 1 0 0-3A0.50.5 0 0 1 0 6zm4 1a0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0-1h-7a0.50.5 0 0 0-0.50.5m0 5a0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0-1h-7a0.50.5 0 0 0-0.50.5M4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTicketDetailedFill;
