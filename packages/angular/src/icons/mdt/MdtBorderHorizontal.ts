import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-border-horizontal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBorderHorizontal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 3h2v2h-2zm8 0h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm4 12h2v2H7zm4-12h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zm12 16h2v2h-2zm-4 0h2v2h-2zm8-4h2v2h-2zm0 4h2v2h-2zm-8-4h2v2h-2zm-8-4h18v2H3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBorderHorizontal;
