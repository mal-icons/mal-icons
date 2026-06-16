import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wifi-proxy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWifiProxy {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M700-180h50v-50h-50v50Zm0-110h50v-50h-50v50Zm110 110h50v-50h-50v50Zm-170 60v-280h170v110h110v170H640Zm-160 0L0-600q99-94 221-147t259-53q137 0 259 53t221 147L833-473q-15-5-30.5-7.5T770-483h-9l111-111q-87-68-184.5-107T480-740q-110 0-207.5 39T88-594l392 392 77-77v9q0 17 2.5 32.5T567-207l-87 87Zm0-351Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWifiProxy;
