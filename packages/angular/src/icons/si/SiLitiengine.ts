import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-litiengine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLitiengine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m0 12.02 2.09 2.09L11.99 24l2.15-2.15-9.9-9.89 6.59-6.58-2.09-2.09Zm13.21 6.62 2.08 2.08 5.43-5.42-2.08-2.08zM9.85 2.15l6.61 6.6L9.9 15.31l2.13 2.13 6.56-6.55 3.26 3.26L24 11.99 12 0Zm-3.28 9.85 2.04 2.03 5.45-5.45-2.03-2.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLitiengine;
