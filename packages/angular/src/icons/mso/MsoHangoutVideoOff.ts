import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-hangout-video-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHangoutVideoOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M400-639h168v168L400-639Zm145 145 179-142v321L545-494Zm320 317q9-8 16-20t7-32v-507q0-24-18-42t-42-18H243l60 60h525v522l37 37ZM161-796l60 60h-69v507h491L543-329H257v-286L38-833l43-43L886-71l-43 43-141-141H152q-24 0-42-18t-18-42v-507q0-24 18-42t42-18h9Zm406 324Zm-168-1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHangoutVideoOff;
