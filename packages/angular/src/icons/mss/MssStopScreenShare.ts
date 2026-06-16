import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-stop-screen-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssStopScreenShare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M552-485 444-593h86v-70l100 100-78 78Zm253 256-60-62h69v-483H262l-60-60h672v605h-69Zm32 201-97-97H40v-60h640l-46-46H87v-547l-55-55 43-43L880-71l-43 43ZM393-472v85h-60v-90q0-10 2-22.5t7-23.03L147-718v427h427L393-472Zm111-61Zm-143 28Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssStopScreenShare;
