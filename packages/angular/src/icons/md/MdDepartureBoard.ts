import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-departure-board",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdDepartureBoard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"5.5","cy":"16.5","r":"1.5"}],["circle",{"cx":"12.5","cy":"16.5","r":"1.5"}],["path",{"d":"M16 1a6.98 6.98 0 0 0-5.75 3.02C9.84 4.01 9.43 4 9 4c-4.42 0-8 0.5-8 4v10c0 0.880.39 1.67 1 2.22V22c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1v-1h8v1c0 0.550.45 1 1 1h1c0.55 0 1-0.45 1-1v-1.78c0.61-0.55 1-1.34 1-2.22v-3.08c3.39-0.49 6-3.39 6-6.92 0-3.87-3.13-7-7-7zM9 6h0.29c-0.090.32-0.160.66-0.210.99H3.34C3.89 6.46 5.31 6 9 6zM3 8.99h6.08c0.16 1.110.57 2.13 1.18 3.01H3V8.99zM15 18c0 0.37-0.210.62-0.340.73l-0.290.27H3.63l-0.29-0.27A0.970.97 0 0 1 3 18v-4h9.41c0.780.47 1.650.79 2.590.92V18zm1-5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0.5-9H15v5l3.62 2.160.75-1.23-2.87-1.68z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdDepartureBoard;
