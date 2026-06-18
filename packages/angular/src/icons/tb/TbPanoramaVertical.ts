import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-panorama-vertical",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPanoramaVertical {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.46 4.34c-1.93 5.11 -1.93 10.21 0 15.32a1 1 0 0 1 -0.93 1.35h-11c-0.69 0 -1.21 -0.69 -0.96 -1.34c1.93 -5.11 1.93 -10.21 0 -15.32c-0.25 -0.65 0.24 -1.34 0.94 -1.34h11.03c0.69 0 1.18 0.69 0.94 1.34l0 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPanoramaVertical;
