import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-3k-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mdr_3kPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-9 11c0 0.55-0.45 1-1 1H6.25c-0.41 0-0.75-0.34-0.75-0.75s0.34-0.750.75-0.75H8.5v-1H7c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.5h1.5v-1H6.25c-0.41 0-0.75-0.34-0.75-0.75S5.84 9 6.25 9H9c0.55 0 1 0.45 1 1v4zm4.59 1c-0.22 0-0.42-0.1-0.55-0.27l-1.54-1.98v1.5c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75l-0.03-4.49c-0.01-0.420.33-0.760.75-0.760.41 0 0.750.330.750.74l0.03 1.51 1.54-1.98a0.70.7 0 0 1 1.110.85L13.75 12l1.41 1.88c0.340.460.01 1.12-0.57 1.12zm3.91-2.5h-1v1c0 0.28-0.220.5-0.50.5s-0.5-0.22-0.5-0.5v-1h-1c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.5h1v-1c0-0.280.22-0.50.5-0.5s0.50.220.50.5v1h1c0.28 0 0.50.220.50.5s-0.220.5-0.50.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mdr_3kPlus;
