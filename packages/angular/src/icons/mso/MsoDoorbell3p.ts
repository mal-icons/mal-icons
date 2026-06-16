import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-doorbell-3p",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDoorbell3p {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260-80q-24.75 0-42.37-17.62T200-140v-680q0-24.75 17.63-42.37T260-880h440q24.75 0 42.38 17.63T760-820v680q0 24.75-17.62 42.38T700-80H260Zm0-60h440v-680H260v680Zm220-60q33 0 56.5-23.5T560-280q0-33-23.5-56.5T480-360q-33 0-56.5 23.5T400-280q0 33 23.5 56.5T480-200Zm0-30q-20 0-35-15t-15-35.5q0-20.5 15-35t35.5-14.5q20.5 0 35 14.38T530-280q0 20-14.37 35T480-230Zm0-200q13.5 0 21.75-8.25T510-460h-60q0 14 8.25 22t21.75 8Zm-160-60h320v-30h-50v-92q0-45-19.5-75.5T509-730v-14q0-12.25-8.5-20.12T480-772q-12 0-20.5 7.88T451-744v14q-42 15-61.5 44T370-612v92h-50v30Zm-60 350v-680 680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDoorbell3p;
