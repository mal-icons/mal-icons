import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-4g-mobiledata-badge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mso_4gMobiledataBadge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h760q24 0 42 18t18 42v600q0 24-18 42t-42 18H100Zm0-60h760v-600H100v600Zm0 0v-600 600Zm700-332H698v60h43v112H590v-280h210q-3-24-19.45-42T741-680H590q-24.75 0-42.37 17.63T530-620v280q0 24.75 17.63 42.38T590-280h151q25 0 42-17.62T800-340v-172ZM324-280h60v-130h85v-60h-85v-210h-60v210H220v-210h-60v270h164v130Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mso_4gMobiledataBadge;
