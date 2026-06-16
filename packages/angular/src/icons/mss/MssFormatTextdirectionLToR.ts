import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-format-textdirection-l-to-r",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFormatTextdirectionLToR {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M390-360v-220q-66 0-113-43t-47-106.5q0-63.5 43.5-107T380-880h280v60h-90v460h-60v-460h-60v460h-60ZM694-80l-42-42 74-74H120v-60h606l-74-74 42-42 146 146L694-80ZM390-640v-180q-42 0-71 24t-29 66q0 42 29 66t71 24Zm0-90Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFormatTextdirectionLToR;
