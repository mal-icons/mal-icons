import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-smile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsSmile {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22c5.51 0 10-4.49 10-10S17.51 2 12 2 2 6.49 2 12s4.49 10 10 10zm3.49-13a1.49 1.49 0 1 10 2.99A1.49 1.49 0 0 1 15.49 9zm-4.3 6.92a4.11 4.11 0 0 0 1.62 0c0.25-0.050.51-0.130.75-0.230.23-0.10.46-0.220.68-0.370.21-0.140.41-0.310.59-0.490.18-0.180.35-0.380.49-0.59l1.66 1.12a6.03 6.03 0 0 1-1.62 1.62 6 6 0 0 1-2.150.9 6.12 6.12 0 0 1-2.410 5.92 5.92 0 0 1-2.15-0.9 6.08 6.08 0 0 1-1.62-1.62l1.66-1.12c0.140.210.310.410.490.59a3.99 3.99 0 0 0 2.02 1.09zM8.5 9a1.5 1.5 0 1 10 3A1.5 1.5 0 0 1 8.5 9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsSmile;
