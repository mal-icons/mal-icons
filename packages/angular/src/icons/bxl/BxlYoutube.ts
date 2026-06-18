import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-youtube",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlYoutube {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.59 7.2a2.51 2.51 0 0 0-1.76-1.77C18.27 5.01 12 5 12 5s-6.26-0.01-7.830.4a2.56 2.56 0 0 0-1.77 1.78c-0.41 1.57-0.42 4.81-0.42 4.81s0 3.260.41 4.81c0.230.860.91 1.53 1.76 1.77 1.580.43 7.830.44 7.830.44s6.270.01 7.83-0.4a2.52 2.52 0 0 0 1.77-1.76c0.41-1.560.42-4.810.42-4.81s0.02-3.26-0.41-4.83zM10 15.01l0.01-6 5.21 3.01-5.21 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlYoutube;
