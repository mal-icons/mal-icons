import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-calendar2-date-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCalendar2DateFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.4 10.25c0.63 0 1.18-0.48 1.18-1.18 0-0.83-0.53-1.23-1.16-1.23-0.59 0-1.170.39-1.17 1.21 0 0.820.54 1.2 1.14 1.2"}],["path",{"d":"M3.5 0a0.50.5 0 0 1 0.50.5V1h8V0.5a0.50.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V0.5a0.50.5 0 0 1 0.5-0.5m9.95 3H2.55c-0.3 0-0.550.22-0.550.5v1c0 0.280.240.50.550.5h10.91c0.3 0 0.55-0.220.55-0.5v-1c0-0.28-0.24-0.5-0.55-0.5m-4.12 9.79c1.26 0 2-1.07 2-2.87 0-1.93-0.78-2.67-1.95-2.67-0.93 0-1.80.67-1.8 1.81 0 1.160.82 1.77 1.68 1.770.75 0 1.23-0.38 1.38-0.79h0.03c0 1.32-0.46 2.16-1.3 2.16-0.66 0-1.01-0.45-1.05-0.82h-0.68c0.050.640.59 1.41 1.7 1.41zm-2.89-5.43h-0.63A13 13 0 0 0 4.5 8.16v0.7c0.38-0.260.97-0.62 1.26-0.78h0.01v4.61h0.68V7.35z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCalendar2DateFill;
