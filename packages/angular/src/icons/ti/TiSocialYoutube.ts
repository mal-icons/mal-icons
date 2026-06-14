import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-social-youtube",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiSocialYoutube {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.8 8.6c-0.2-1.5-0.4-2.6-1-3-0.6-0.5-5.8-0.6-9.8-0.6s-9.20.1-9.80.6c-0.60.4-0.8 1.5-1 3s-0.2 2.4-0.2 3.4 0 1.90.2 3.40.4 2.6 1 3c0.60.5 5.80.6 9.80.6 4 0 9.2-0.1 9.8-0.60.6-0.40.8-1.5 1-3s0.2-2.40.2-3.4 0-1.9-0.2-3.4zm-12.8 7v-7.2l6 3.6-6 3.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiSocialYoutube;
