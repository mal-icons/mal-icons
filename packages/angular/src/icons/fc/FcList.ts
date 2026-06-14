import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcList {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["rect",{"fill":"#2196F3","x":"6","y":"22","width":"4","height":"4"}],["rect",{"fill":"#2196F3","x":"6","y":"14","width":"4","height":"4"}],["rect",{"fill":"#2196F3","x":"6","y":"30","width":"4","height":"4"}],["rect",{"fill":"#2196F3","x":"6","y":"6","width":"4","height":"4"}],["rect",{"fill":"#2196F3","x":"6","y":"38","width":"4","height":"4"}],["rect",{"fill":"#2196F3","x":"14","y":"22","width":"28","height":"4"}],["rect",{"fill":"#2196F3","x":"14","y":"14","width":"28","height":"4"}],["rect",{"fill":"#2196F3","x":"14","y":"30","width":"28","height":"4"}],["rect",{"fill":"#2196F3","x":"14","y":"6","width":"28","height":"4"}],["rect",{"fill":"#2196F3","x":"14","y":"38","width":"28","height":"4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcList;
