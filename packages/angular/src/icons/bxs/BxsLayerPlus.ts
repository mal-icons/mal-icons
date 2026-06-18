import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-layer-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsLayerPlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2.51 12.83 9.02 5.04a11 0 0 0 0.970l8.98-5a1 1 0 0 00-1.75l-9.02-5a1 1 0 0 0-0.970l-8.98 4.96a1 1 0 0 00 1.75z"}],["path",{"d":"m3.49 15.13-0.97 1.75 9 5a1 1 0 0 0 0.97 0l9-5-0.97-1.75L12 19.86l-8.51-4.73zM20 8V6h2V4h-2V2h-2v2h-2v2h2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsLayerPlus;
