import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-card-membership",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCardMembership {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-443v103h680v-103H140Zm0-437h680q24.75 0 42.38 17.63T880-820v480q0 24.75-17.62 42.38T820-280H626v151q0 17.5-14.5 26.25T582-102l-88-45q-7-3-14-3t-14 3l-88 45q-15 8-29.5-0.75T334-129v-151H140q-24.75 0-42.37-17.62T80-340v-480q0-24.75 17.63-42.37T140-880Zm0 329h680v-269H140v269Zm0 211v-480 480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCardMembership;
