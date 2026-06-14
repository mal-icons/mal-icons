import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-add-image",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcAddImage {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#8CBCD6","d":"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}],["circle",{"fill":"#B3DDF5","cx":"35","cy":"16","r":"3"}],["polygon",{"fill":"#9AC9E3","points":"20,16 9,32 31,32"}],["polygon",{"fill":"#B3DDF5","points":"31,22 23,32 39,32"}],["circle",{"fill":"#43A047","cx":"38","cy":"38","r":"10"}],["rect",{"fill":"#fff","x":"36","y":"32","width":"4","height":"12"}],["rect",{"fill":"#fff","x":"32","y":"36","width":"12","height":"4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcAddImage;
