import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-price-change",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPriceChange {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm-9 6H8v1h3c0.55 0 1 0.45 1 1v3c0 0.55-0.45 1-1 1h-1c0 0.55-0.45 1-1 1s-1-0.45-1-1H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h3v-1H7c-0.55 0-1-0.45-1-1V9c0-0.550.45-1 1-1h1c0-0.550.45-1 1-1s1 0.45 1 1h1c0.55 0 1 0.45 1 1s-0.45 1-1 1zm4.65 5.9L14 14.25h4l-1.65 1.65c-0.190.19-0.510.19-0.7 0zM14 10l1.65-1.65c0.2-0.20.51-0.20.71 0L18 10h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPriceChange;
