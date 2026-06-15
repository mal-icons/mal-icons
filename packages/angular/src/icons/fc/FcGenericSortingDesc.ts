import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-generic-sorting-desc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcGenericSortingDesc {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["rect",{"x":"6","y":"38","fill":"#2196F3","width":"4","height":"4"}],["rect",{"x":"6","y":"30","fill":"#2196F3","width":"12","height":"4"}],["rect",{"x":"6","y":"22","fill":"#2196F3","width":"20","height":"4"}],["rect",{"x":"6","y":"14","fill":"#2196F3","width":"28","height":"4"}],["rect",{"x":"6","y":"6","fill":"#2196F3","width":"36","height":"4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcGenericSortingDesc;
