import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-layer-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxLayerPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.48 11.13-9.02-5a1 1 0 0 0-0.970l-8.98 4.96a1 1 0 0 00 1.75l9.02 5.04a11 0 0 0 0.970l8.98-5a1 1 0 0 00-1.75zm-9.46 4.73-6.96-3.89 6.92-3.82 6.96 3.86-6.92 3.85z"}],["path",{"d":"M12 22a0.990.99 0 0 0 0.49-0.13l9-5-0.97-1.75L12 19.86l-8.51-4.73-0.97 1.75 9 5A1 1 0 0 0 12 22zm8-20h-2v2h-2v2h2v2h2V6h2V4h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxLayerPlus;
