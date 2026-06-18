import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-border-bottom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBorderBottom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 7h2v2H3zm0 4h2v2H3zm0 4h2v2H3zM3 3h2v2H3zm8 0h2v2h-2zM7 3h2v2H7zm8 0h2v2h-2zm4 0h2v2h-2zm0 12h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-8 0h2v2H7zm4-4h2v2h-2zm0 8h2v2h-2zm0-4h2v2h-2zm6 8H3v2h18v-2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBorderBottom;
