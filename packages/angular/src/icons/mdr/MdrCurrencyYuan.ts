import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-currency-yuan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCurrencyYuan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 21c-0.55 0-1-0.45-1-1v-6H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h3.72L5.98 4.54A11 0 0 1 6.82 3c0.34 0 0.660.170.840.46L12 10.29l4.34-6.83c0.18-0.290.5-0.460.84-0.460.79 0 1.270.870.84 1.54L13.28 12H17c0.55 0 1 0.45 1 1s-0.45 1-1 1h-4v6c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCurrencyYuan;
