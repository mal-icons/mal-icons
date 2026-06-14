import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-internal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcInternal {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["circle",{"fill":"#B3E5FC","cx":"24","cy":"30","r":"15"}],["polygon",{"fill":"#1565C0","points":"24,38.7 15,28 33,28"}],["rect",{"fill":"#1565C0","x":"21","y":"5","width":"6","height":"26"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcInternal;
