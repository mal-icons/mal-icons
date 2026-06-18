import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-keyframe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbKeyframe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.23 18.41a1.6 1.6 0 0 1 -1.23 0.59c-0.47 0 -0.91 -0.21 -1.23 -0.59l-4.36 -5.25a1.84 1.84 0 0 1 0 -2.33l4.36 -5.25a1.6 1.6 0 0 1 1.23 -0.59c0.47 0 0.91 0.21 1.23 0.59l4.36 5.25a1.84 1.84 0 0 1 0 2.33l-4.36 5.25"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbKeyframe;
