import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-tree-structure",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcTreeStructure {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#90CAF9","points":"36.9,13.8 35.1,10.2 7.5,24 35.1,37.8 36.9,34.2 16.5,24"}],["rect",{"x":"6","y":"18","fill":"#D81B60","width":"12","height":"12"}],["rect",{"fill":"#2196F3","x":"30","y":"6","width":"12","height":"12"}],["rect",{"fill":"#2196F3","x":"30","y":"30","width":"12","height":"12"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcTreeStructure;
