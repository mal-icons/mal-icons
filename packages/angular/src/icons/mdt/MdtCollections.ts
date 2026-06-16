import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-collections",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCollections {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16h12V4H8v12zm3.5-4.33 1.69 2.26 2.48-3.09L19 15H9l2.5-3.33z","opacity":".3"}],["path",{"d":"M8 2c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H8zm12 14H8V4h12v12zm-4.33-5.17-2.48 3.09-1.69-2.25L9 15h10zM4 22h14v-2H4V6H2v14c0 1.10.9 2 2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCollections;
