import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-object-group",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrObjectGroup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,1 L4,1 L4,4 L1,4 L1,1 Z M20,1 L23,1 L23,4 L20,4 L20,1 Z M4,2 L20,2 M4,22 L20,22 M1,20 L4,20 L4,23 L1,23 L1,20 Z M20,20 L23,20 L23,23 L20,23 L20,20 Z M2,4 L2,20 M22,4 L22,20 M7,7 L14,7 L14,13 L7,13 L7,7 Z M17,10 L17,17 L10,17 L10,15"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrObjectGroup;
