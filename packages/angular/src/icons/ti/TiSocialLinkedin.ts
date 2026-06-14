import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-social-linkedin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiSocialLinkedin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 19h-3v-10h3v10zm11 0h-3v-5.34c0-1.39-0.5-2.08-1.48-2.08-0.78 0-1.270.39-1.52 1.17v6.26h-3s0.04-9 0-10h2.37l0.18 2h0.06c0.62-1 1.6-1.68 2.95-1.68 1.02 0 1.850.28 2.49 10.640.720.95 1.680.95 3.03v5.65z"}],["ellipse",{"cx":"6.5","cy":"6.5","rx":"1.55","ry":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiSocialLinkedin;
