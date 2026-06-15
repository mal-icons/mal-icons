import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-banknotes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiBanknotes {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M2.25 18.75a60.07 60.07 0 0 1 15.8 2.1c0.730.2 1.45-0.34 1.45-1.1V18.75M3.75 4.5v0.75A0.750.75 0 0 1 3 6h-0.75m0 0v-0.37c0-0.620.5-1.12 1.13-1.12H20.25M2.25 6v9m18-10.5v0.75c0 0.410.340.750.750.75h0.75m-1.5-1.5h0.38c0.62 0 1.130.5 1.13 1.13v9.75c0 0.62-0.5 1.13-1.12 1.13h-0.37m1.5-1.5H21a0.750.75 0 0 0-0.750.75v0.75m0 0H3.75m0 0h-0.37a1.13 1.13 0 0 1-1.12-1.12V15m1.5 1.5v-0.75A0.750.75 0 0 0 3 15h-0.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h0.01v0.01H18V10.5Zm-12 0h0.01v0.01H6V10.5Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiBanknotes;
