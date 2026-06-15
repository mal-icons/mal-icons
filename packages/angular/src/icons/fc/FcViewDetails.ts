import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-view-details",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcViewDetails {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["rect",{"x":"7","y":"4","fill":"#BBDEFB","width":"34","height":"40"}],["rect",{"fill":"#2196F3","x":"13","y":"26","width":"4","height":"4"}],["rect",{"fill":"#2196F3","x":"13","y":"18","width":"4","height":"4"}],["rect",{"fill":"#2196F3","x":"13","y":"34","width":"4","height":"4"}],["rect",{"fill":"#2196F3","x":"13","y":"10","width":"4","height":"4"}],["rect",{"fill":"#2196F3","x":"21","y":"26","width":"14","height":"4"}],["rect",{"fill":"#2196F3","x":"21","y":"18","width":"14","height":"4"}],["rect",{"fill":"#2196F3","x":"21","y":"34","width":"14","height":"4"}],["rect",{"fill":"#2196F3","x":"21","y":"10","width":"14","height":"4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcViewDetails;
