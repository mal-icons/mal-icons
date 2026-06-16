import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-margin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtMargin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 19h14V5H5v14zM15 7h2v2h-2V7zm0 4h2v2h-2v-2zm-4-4h2v2h-2V7zm0 4h2v2h-2v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2z","opacity":".3"}],["path",{"d":"M7 7h2v2H7zm0 4h2v2H7z"}],["path",{"d":"M3 3v18h18V3H3zm16 16H5V5h14v14z"}],["path",{"d":"M11 7h2v2h-2zm4 4h2v2h-2zm-4 0h2v2h-2zm4-4h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtMargin;
