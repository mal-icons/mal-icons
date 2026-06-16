import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-restore-page",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRestorePage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M482-251q78 0 132-54t54-132q0-78-54-132t-132-54q-45 0-82 19t-61 45v-69h-45v152h154v-45h-75q16-23 46.5-37.5T482-573q60 0 98 38t38 98q0 60-38 98.5T482.4-300q-48.56 0-84.98-26Q361-352 347-393h-51q18 65 68 103.5T482-251ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h341l239 239v501q0 24-18 42t-42 18H220Zm0-60h520v-474L534-820H220v680Zm0 0v-680 680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRestorePage;
