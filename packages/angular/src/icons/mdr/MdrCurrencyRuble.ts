import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-currency-ruble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCurrencyRuble {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 21c0.55 0 1-0.45 1-1v-2h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H9v-2h4.5c3.22 0 5.79-2.76 5.47-6.04C18.7 5.1 16.14 3 13.26 3H8c-0.55 0-1 0.45-1 1v8H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v2H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v2c0 0.550.45 1 1 1zm5.5-9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCurrencyRuble;
