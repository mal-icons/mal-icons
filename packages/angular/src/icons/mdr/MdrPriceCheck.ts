import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-price-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPriceCheck {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 13V9c0-0.55-0.45-1-1-1H6V6h4c0.55 0 1-0.45 1-1s-0.45-1-1-1H8.5c0-0.55-0.45-1-1-1s-1 0.45-1 1H5c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h4v2H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h1.5c0 0.550.45 1 1 1s1-0.45 1-1H10c0.55 0 1-0.45 1-1zm7.880.22-4.95 4.95-2.12-2.12a11 0 1 0-1.41 1.41l2.83 2.83c0.390.39 1.020.39 1.41 0l5.66-5.66a11 0 0 0 0-1.41c-0.4-0.39-1.03-0.39-1.42 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPriceCheck;
