import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-view-quilt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtViewQuilt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.33 17H5V7h3.33v10zm5.34 0h-3.33v-4h3.33v4zM19 17h-3.33v-4H19v4zm0-6h-8.67V7H19v4z","opacity":".3"}],["path",{"d":"M3 5v14h18V5H3zm5.33 12H5V7h3.33v10zm5.34 0h-3.33v-4h3.33v4zM19 17h-3.33v-4H19v4zm0-6h-8.67V7H19v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtViewQuilt;
