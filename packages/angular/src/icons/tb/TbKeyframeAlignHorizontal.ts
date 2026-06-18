import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-keyframe-align-horizontal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbKeyframeAlignHorizontal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.82 16.58c-0.21 0.27 -0.5 0.42 -0.82 0.42c-0.31 0 -0.61 -0.15 -0.82 -0.42l-2.91 -3.75a1.39 1.39 0 0 1 0 -1.66l2.91 -3.75c0.21 -0.27 0.5 -0.42 0.82 -0.42c0.31 0 0.61 0.15 0.82 0.42l2.91 3.75a1.39 1.39 0 0 1 0 1.66l-2.91 3.75"}],["path",{"d":"M3 12h2"}],["path",{"d":"M19 12h2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbKeyframeAlignHorizontal;
