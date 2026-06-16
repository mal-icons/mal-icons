import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-airline-seat-recline-extra",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAirlineSeatReclineExtra {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.35 5.64c-0.9-0.64-1.12-1.88-0.49-2.790.63-0.9 1.88-1.12 2.79-0.490.90.64 1.12 1.880.49 2.79-0.640.9-1.88 1.12-2.790.49zM16 20c0-0.55-0.45-1-1-1H8.93c-1.48 0-2.74-1.08-2.96-2.54L4.16 7.78A0.980.98 0 0 0 3.2 7c-0.62 0-1.080.57-0.96 1.18l1.75 8.58A5.01 5.01 0 0 0 8.94 21H15c0.55 0 1-0.45 1-1zm-0.46-5h-4.19l-1.03-4.1c1.280.72 2.63 1.28 4.1 1.30.580.01 1.05-0.49 1.05-1.07 0-0.59-0.49-1.04-1.08-1.06-1.31-0.04-2.63-0.56-3.61-1.33L9.14 7.47c-0.23-0.18-0.49-0.3-0.76-0.38a2.21 2.21 0 0 0-0.99-0.06h-0.02a2.27 2.27 0 0 0-1.84 2.61l1.35 5.92A3.01 3.01 0 0 0 9.83 18h6.85l3.09 2.42c0.420.33 1.020.29 1.39-0.080.45-0.450.4-1.18-0.1-1.57l-4.29-3.35a2.01 2.01 0 0 0-1.23-0.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAirlineSeatReclineExtra;
