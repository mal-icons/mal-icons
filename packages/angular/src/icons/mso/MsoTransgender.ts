import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-transgender",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTransgender {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.8-340Q546-340 593-386.8t47-113Q640-566 593.2-613t-113-47Q414-660 367-613.2t-47 113Q320-434 366.8-387t113 47ZM450-40v-80h-80v-60h80v-101q-82.33-14.1-136.17-75.55Q260-418 260-500q0-36 11-70.11T304-633l-42-42-56 56-42-42 56-56-100-100v117H60v-220h220v60H163l100 100 56-56 42 42-56 56 43 43q29-22 62.5-33.5T480-720q36 0 70 11t63 33l184-184H680v-60h220v220h-60v-117L656-633q22 29 33 62.77T700-500q0 82-53.83 143.45Q592.33-295.1 510-281v101h80v60h-80v80h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTransgender;
