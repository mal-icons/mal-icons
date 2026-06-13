import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-qr-code-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoQrCodeSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"336","y":"336","width":"80","height":"80"}],["rect",{"x":"272","y":"272","width":"64","height":"64"}],["rect",{"x":"416","y":"416","width":"64","height":"64"}],["rect",{"x":"432","y":"272","width":"48","height":"48"}],["rect",{"x":"272","y":"432","width":"48","height":"48"}],["rect",{"x":"336","y":"96","width":"80","height":"80"}],["path",{"d":"M480,240H272V32H480ZM316,196H436V76H316Z"}],["rect",{"x":"96","y":"96","width":"80","height":"80"}],["path",{"d":"M240,240H32V32H240ZM76,196H196V76H76Z"}],["rect",{"x":"96","y":"336","width":"80","height":"80"}],["path",{"d":"M240,480H32V272H240ZM76,436H196V316H76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoQrCodeSharp;
