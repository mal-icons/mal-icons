import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-social-google-plus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiSocialGooglePlus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.9 13.5l-0.7-0.5c-0.2-0.2-0.5-0.4-0.5-0.8s0.3-0.70.6-1c0.8-0.6 1.7-1.3 1.7-2.8 0-1.5-0.9-2.3-1.4-2.7h1.2l1.2-0.7h-4.1c-1 0-2.40.2-3.5 1.1-0.80.7-1.2 1.7-1.2 2.6 0 1.5 1.2 3.1 3.3 3.1h0.6c-0.10.2-0.20.4-0.20.7 0 0.60.3 1 0.6 1.3-0.90.1-2.50.2-3.80.9-1.20.7-1.5 1.7-1.5 2.4 0 1.5 1.4 2.8 4.2 2.8 3.4 0 5.2-1.9 5.2-3.7 0-1.3-0.8-1.9-1.7-2.7zm-2.5-2.2c-1.7 0-2.5-2.2-2.5-3.5 0-0.50.1-1 0.4-1.50.3-0.40.9-0.7 1.4-0.7 1.6 0 2.5 2.2 2.5 3.6 0 0.4 0 1-0.5 1.4-0.30.4-0.90.7-1.30.7zm0 7.9c-2.1 0-3.5-1-3.5-2.4s1.3-1.9 1.7-2c0.8-0.3 1.9-0.3 2.1-0.3h0.5c1.5 1.1 2.1 1.6 2.1 2.6 0 1.2-1 2.1-2.9 2.1zM17 12h-2v-1h2v-1.9l1-0.1v2h2v1h-2v2h-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiSocialGooglePlus;
