import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-toys",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtToys {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 12H6c-1.1 0-2 0.9-2 2 0 0.510.20.970.51 1.32C5.05 14.53 5.97 14 7 14c1.3 0 2.40.84 2.82 2h4.37c0.41-1.16 1.51-2 2.82-2 1.03 0 1.950.53 2.49 1.320.3-0.350.5-0.810.5-1.32 0-1.1-0.9-2-2-2z","opacity":".3"}],["path",{"d":"M18.75 10.08 17.4 6.05A2.98 2.98 0 0 0 14.56 4H9.44C8.15 4 7 4.82 6.6 6.05L5.81 8.4 4.41 7l0.29-0.29A11 0 1 0 3.29 5.3l-2 2A11 0 1 0 2.7 8.71l0.3-0.3 1.79 1.79C3.18 10.72 2 12.22 2 14c0 1.490.83 2.78 2.05 3.47A2.99 2.99 0 0 0 7 20c1.3 0 2.4-0.84 2.82-2h4.37c0.41 1.16 1.51 2 2.82 2 1.49 0 2.73-1.1 2.95-2.53C21.17 16.78 22 15.49 22 14c0-1.95-1.4-3.57-3.25-3.92zM13 6h1.56a1 1 0 0 1 0.950.68l1.1 3.32H13V6zm-4.510.68A1 1 0 0 1 9.44 6H11v4H7.41l-0.02-0.02 1.1-3.3zM7 18c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm10 0c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm2.49-2.68A3.03 3.03 0 0 0 17 14c-1.3 0-2.40.84-2.82 2H9.82C9.4 14.84 8.3 14 7 14c-1.03 0-1.950.53-2.49 1.32C4.2 14.97 4 14.51 4 14c0-1.10.9-2 2-2h12c1.1 0 2 0.9 2 2 0 0.51-0.20.97-0.51 1.32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtToys;
