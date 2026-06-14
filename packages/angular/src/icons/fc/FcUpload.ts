import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-upload",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcUpload {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#009688","points":"24,10.9 35,24 13,24"}],["rect",{"fill":"#009688","x":"20","y":"40","width":"8","height":"4"}],["rect",{"fill":"#009688","x":"20","y":"34","width":"8","height":"4"}],["rect",{"fill":"#009688","x":"20","y":"21","width":"8","height":"11"}],["rect",{"fill":"#009688","x":"6","y":"4","width":"36","height":"4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcUpload;
