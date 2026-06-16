import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-shop-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrShop2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 9c-0.55 0-1 0.45-1 1v10c0 1.10.9 2 2 2h15c0.55 0 1-0.45 1-1s-0.45-1-1-1H3V10c0-0.55-0.45-1-1-1z"}],["path",{"d":"M18 5V3c0-1.11-0.89-2-2-2h-4c-1.11 0-2 0.89-2 2v2H5v11c0 1.110.89 2 2 2h14c1.11 0 2-0.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 11.09V8.91c0-0.390.44-0.630.77-0.42l4.07 2.59c0.310.20.310.65 0 0.84l-4.07 2.59a0.50.5 0 0 1-0.77-0.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrShop2;
