import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-social-instagram",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiSocialInstagram {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 3h-12c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3.8-2c0-0.70.6-1.2 1.2-1.2s1.20.6 1.2 1.2-0.5 1.2-1.2 1.2-1.2-0.5-1.2-1.2zm2.2 12h-12c-0.6 0-1-0.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 0.6-0.4 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiSocialInstagram;
