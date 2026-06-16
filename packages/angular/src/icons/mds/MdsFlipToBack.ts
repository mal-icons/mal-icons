import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-flip-to-back",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsFlipToBack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 7H7v2h2V7zm0 4H7v2h2v-2zm4 4h-2v2h2v-2zm0-12h-2v2h2V3zM9 3H7v2h2V3zm12 0h-2v2h2V3zm0 12h-2v2h2v-2zM9 15H7v2h2v-2zm10-2h2v-2h-2v2zm0-4h2V7h-2v2zM5 7H3v14h14v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsFlipToBack;
