import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-currency-franc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCurrencyFranc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 4c0-0.55-0.45-1-1-1H8c-0.55 0-1 0.45-1 1v12H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H9v-3h7c0.55 0 1-0.45 1-1s-0.45-1-1-1H9V5h8c0.55 0 1-0.45 1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCurrencyFranc;
