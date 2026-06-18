import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-paper-plane",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaPaperPlane {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3.59 5.34 L 4.03 7.22 L 5.97 16 L 4.03 24.78 L 3.59 26.66 L 5.38 25.94 L 27.38 16.94 L 29.66 16 L 27.38 15.06 L 5.38 6.06 Z M 6.38 8.66 L 21.91 15 L 7.78 15 Z M 7.78 17 L 21.91 17 L 6.38 23.34 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaPaperPlane;
