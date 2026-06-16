import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-candlestick-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCandlestickChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4c-0.55 0-1 0.45-1 1v1H6c-0.55 0-1 0.45-1 1v10c0 0.550.45 1 1 1h1v1c0 0.550.45 1 1 1s1-0.45 1-1v-1h1c0.55 0 1-0.45 1-1V7c0-0.55-0.45-1-1-1H9V5c0-0.55-0.45-1-1-1zm10 4h-1V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v3h-1c-0.55 0-1 0.45-1 1v5c0 0.550.45 1 1 1h1v4c0 0.550.45 1 1 1s1-0.45 1-1v-4h1c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCandlestickChart;
