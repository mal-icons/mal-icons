import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-send-to-mobile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtSendToMobile {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 3h10v1H7zm0 17h10v1H7z","opacity":".3"}],["path",{"d":"m22 12-4-4v3h-5v2h5v3l4-4zm-5 6H7V6h10v1h2V3c0-1.1-0.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtSendToMobile;
