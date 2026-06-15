import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-podium-with-audience",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcPodiumWithAudience {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#B0BEC5","points":"41,12 7,12 6,16 11,19 9,16 39,16 37,19 42,16"}],["polygon",{"fill":"#78909C","points":"9,16 39,16 35,28 13,28"}],["circle",{"fill":"#FFB74D","cx":"24","cy":"28","r":"4"}],["circle",{"fill":"#FFB74D","cx":"36","cy":"28","r":"4"}],["circle",{"fill":"#FFB74D","cx":"12","cy":"28","r":"4"}],["circle",{"fill":"#FFB74D","cx":"18","cy":"37","r":"5"}],["circle",{"fill":"#FFB74D","cx":"30","cy":"37","r":"5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcPodiumWithAudience;
