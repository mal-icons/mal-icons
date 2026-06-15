import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-advance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcAdvance {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#1565C0","points":"46.1,24 33,35 33,13"}],["rect",{"fill":"#1565C0","x":"10","y":"20","width":"4","height":"8"}],["rect",{"fill":"#1565C0","x":"4","y":"20","width":"4","height":"8"}],["rect",{"fill":"#1565C0","x":"16","y":"20","width":"4","height":"8"}],["rect",{"fill":"#1565C0","x":"22","y":"20","width":"14","height":"8"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcAdvance;
