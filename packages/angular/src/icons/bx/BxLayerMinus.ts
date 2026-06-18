import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-layer-minus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxLayerMinus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2.51 12.83 9.02 5.04a11 0 0 0 0.970l8.98-5a1 1 0 0 00-1.75l-9.02-5a1 1 0 0 0-0.970l-8.98 4.96a1 1 0 0 00 1.75zm9.46-4.69 6.96 3.86-6.92 3.85-6.96-3.89 6.92-3.82z"}],["path",{"d":"m3.49 15.13-0.97 1.75 9 5a1 1 0 0 0 0.97 0l9-5-0.97-1.75L12 19.86l-8.51-4.73zM16 4h6v2h-6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxLayerMinus;
