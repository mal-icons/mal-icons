import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-quickreply",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtQuickreply {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 4v13.17L5.17 16H15v-6h5V4z","opacity":".3"}],["path",{"d":"M5.17 16 4 17.17V4h16v6h2V4c0-1.1-0.9-2-2-2H4c-1.1 0-1.990.9-1.99 2L2 22l4-4h9v-2H5.17z"}],["path",{"d":"m19 23 3.5-7h-2.2l1.7-4h-5v6h2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtQuickreply;
