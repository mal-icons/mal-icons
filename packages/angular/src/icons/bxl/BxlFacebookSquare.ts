import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-facebook-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlFacebookSquare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.62v-6.96h-2.34v-2.72h2.34v-2c0-2.33 1.42-3.59 3.5-3.590.70 1.40.03 2.10.11v2.42h-1.43c-1.13 0-1.350.54-1.35 1.33v1.74h2.7l-0.35 2.73h-2.35V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlFacebookSquare;
