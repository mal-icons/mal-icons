import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-oneplus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOneplus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 3.74V24h20.26V12.43h-2.26v9.32H2.25V6h9.32V3.74zM18 0v3.74h-3.76v2.26h3.76v3.76h2.26V6H24V3.74h-3.76V0zm-6.45 18.76V8.86H9.56c0 0.68-0.23 1.19-0.58 1.5-0.370.3-0.910.44-1.560.44h-0.24v1.63h2.13v6.31h2.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOneplus;
