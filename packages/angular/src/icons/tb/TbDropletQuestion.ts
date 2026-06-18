import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-droplet-question",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDropletQuestion {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.06 10.88l-4.89 -7.26c-0.42 -0.62 -1.29 -0.8 -1.94 -0.4a1.38 1.38 0 0 0 -0.41 0.4l-4.89 7.26c-1.69 2.84 -1.03 6.44 1.57 8.55c2.2 1.78 5.26 2.06 7.72 0.82"}],["path",{"d":"M19 22v0.01"}],["path",{"d":"M19 19a2 2 0 0 0 0.91 -3.78a1.98 1.98 0 0 0 -2.41 0.48"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDropletQuestion;
