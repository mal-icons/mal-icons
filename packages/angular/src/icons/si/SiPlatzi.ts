import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-platzi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPlatzi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.64 1.13L2.49 9.28a3.84 3.84 0 0 5.44l8.16 8.16a3.84 3.84 0 5.44 0l2.72-2.72-2.72-2.72-2.72 2.72-8.16-8.16 8.16-8.16 5.44 5.44-5.44 5.44 2.72 2.72 5.44-5.44a3.84 3.84 0 0-5.44l-5.45-5.44a3.83 3.83 0 0-5.43 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPlatzi;
