import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-4g-plus-mobiledata",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Mso_4gPlusMobiledata {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M815-365v-85h-85v-60h85v-85h60v85h85v60h-85v85h-60Zm-615 85v-125H40v-275h60v215h100v-215h60v215h48v60h-48v125h-60Zm476-230v170q0 24.75-17.62 42.38T616-280H427q-24.75 0-42.37-17.62T367-340v-280q0-24.75 17.63-42.37T427-680h189q23.51 0 40.26 17.5Q673-645 676-620H427v280h189v-110h-80v-60h140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Mso_4gPlusMobiledata;
