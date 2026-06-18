import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-layer-minus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsLayerMinus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.48 11.13-9.02-5a1 1 0 0 0-0.970l-8.98 4.96a1 1 0 0 00 1.75l9.02 5.04a11 0 0 0 0.970l8.98-5a1 1 0 0 00-1.75z"}],["path",{"d":"M20.52 15.13 12 19.86l-8.51-4.73-0.97 1.75 9 5a1 1 0 0 0 0.97 0l9-5-0.97-1.75zM16 4h6v2h-6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsLayerMinus;
