import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-9k",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdr_9k {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 10h1.5v1.5H8V10zm11-7H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-8 11c0 0.55-0.45 1-1 1H7.25c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75H9.5v-1h-2c-0.55 0-1-0.45-1-1V10c0-0.550.45-1 1-1H10c0.55 0 1 0.45 1 1v4zm5.59 1c-0.22 0-0.42-0.1-0.55-0.27l-1.54-1.98v1.55c0 0.39-0.310.7-0.70.7h-0.1c-0.39 0-0.7-0.31-0.7-0.7V9.7c0-0.390.31-0.70.7-0.7h0.09c0.39 0 0.70.310.70.7v1.55l1.54-1.98c0.14-0.170.35-0.270.56-0.270.58 0 0.910.660.56 1.12L15.75 12l1.41 1.88c0.340.460.01 1.12-0.57 1.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdr_9k;
