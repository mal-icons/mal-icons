import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-lyrics",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdLyrics {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 6h7v2H6zm0 6h4v2H6z"}],["path",{"d":"M15 11.97V16H6l-2 2V4h11v2.03c0.52-0.69 1.2-1.25 2-1.6V4c0-1.1-0.9-2-2-2H4c-1.1 0-1.990.9-1.99 2L2 22l4-4h9c1.1 0 2-0.9 2-2v-2.42a5.16 5.16 0 0 1-2-1.61z"}],["path",{"d":"M6 9h7v2H6zm14-2.82c-0.31-0.11-0.65-0.18-1-0.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V3h2V1h-4v5.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdLyrics;
