import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-flashlight-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFlashlightOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M816.75-130q-8.25 9-21 9T774-130L641-263v123q0 24.75-17.62 42.38T581-80H401q-24.75 0-42.37-17.62T341-140v-423L88-816q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l686 686q9 9 8.5 21t-8.75 21ZM401-503v363h180v-183L401-503Zm240 70-60-61v-44l90-131v-35H371l-60-60h360v-56H311v56l-60-61q2-23 19.58-39T311-880h360q24.75 0 42.38 17.63T731-820v165l-90 132v90Zm-150 20Zm0-172Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFlashlightOff;
