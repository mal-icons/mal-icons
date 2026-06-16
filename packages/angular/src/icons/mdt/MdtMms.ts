import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-mms",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtMms {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 17.17 5.17 16H20V4H4v13.17zM8.5 9.5l2.5 3.01L14.5 8l4.5 6H5l3.5-4.5z","opacity":".3"}],["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v18l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-5.5-8L11 12.51 8.5 9.5 5 14h14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtMms;
