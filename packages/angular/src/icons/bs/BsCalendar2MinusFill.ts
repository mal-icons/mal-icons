import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-calendar2-minus-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCalendar2MinusFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.5 0a0.50.5 0 0 1 0.50.5V1h8V0.5a0.50.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V0.5a0.50.5 0 0 1 0.5-0.5m9.95 3H2.55c-0.3 0-0.550.22-0.550.5v1c0 0.280.240.50.550.5h10.91c0.3 0 0.55-0.220.55-0.5v-1c0-0.28-0.24-0.5-0.55-0.5M6 10a0.50.5 0 0 0 0 1h4a0.50.5 0 0 0 0-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCalendar2MinusFill;
