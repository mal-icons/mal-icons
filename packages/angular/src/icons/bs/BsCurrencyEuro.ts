import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-currency-euro",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCurrencyEuro {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 9.42h1.06C5.4 12.32 7.32 14 10.34 14c0.62 0 1.17-0.07 1.66-0.18v-1.3c-0.480.12-1.040.17-1.660.17-2.1 0-3.45-1.2-3.77-3.26h4.02v-0.93H6.5v-0.94q0-0.160.01-0.33h4.08v-0.93H6.62c0.39-1.9 1.72-2.98 3.72-2.980.61 0 1.180.05 1.660.18V2.19A6.6 6.6 0 0 0 10.34 2c-2.93 0-4.82 1.57-5.24 4.3H4v0.93h1.01v1.26H4v0.93z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCurrencyEuro;
