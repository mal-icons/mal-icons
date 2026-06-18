import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tradingview",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTradingview {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.87 8.28c0 1.35-1.1 2.45-2.45 2.45-1.35 0-2.45-1.1-2.45-2.45 0-1.35 1.1-2.45 2.45-2.45 1.35 0 2.45 1.1 2.45 2.45zM9.75 6H0v4.9h4.85v7.27H9.75Zm8.6 0H24l-5.11 12.17h-5.65z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTradingview;
