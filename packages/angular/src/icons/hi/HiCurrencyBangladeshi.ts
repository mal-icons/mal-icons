import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-currency-bangladeshi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiCurrencyBangladeshi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m8.25 7.50.42-0.21a0.750.75 0 0 1 1.090.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.44c0 0.350.160.70.470.87a3.75 3.75 0 0 0 5.45-2.55c0.08-0.41-0.26-0.75-0.68-0.75h-0.74M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiCurrencyBangladeshi;
