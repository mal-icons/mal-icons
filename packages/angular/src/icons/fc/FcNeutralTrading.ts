import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-neutral-trading",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcNeutralTrading {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#1565C0","points":"43.4,13 35,20 35,6"}],["rect",{"fill":"#1565C0","x":"4","y":"11","width":"34","height":"4"}],["rect",{"fill":"#2196F3","x":"40","y":"23","width":"4","height":"19"}],["rect",{"fill":"#2196F3","x":"34","y":"23","width":"4","height":"19"}],["rect",{"fill":"#2196F3","x":"28","y":"23","width":"4","height":"19"}],["rect",{"fill":"#2196F3","x":"22","y":"23","width":"4","height":"19"}],["rect",{"fill":"#2196F3","x":"16","y":"23","width":"4","height":"19"}],["rect",{"fill":"#2196F3","x":"10","y":"23","width":"4","height":"19"}],["rect",{"fill":"#2196F3","x":"4","y":"23","width":"4","height":"19"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcNeutralTrading;
