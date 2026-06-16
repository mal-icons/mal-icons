import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-open-in-new-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoOpenInNewOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m813-61-59-59H180q-24 0-42-18t-18-42v-574l-59-59 43-43 752 752-43 43ZM180-180h514L459-416l-77 77-42-43 76-76-236-236v514Zm86-600-60-60h253v60H266Zm279 278-43-42 236-236H519v-60h321v321h-60v-218L545-502Zm295 296-60-60v-193h60v253Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoOpenInNewOff;
