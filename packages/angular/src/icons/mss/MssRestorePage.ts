import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-restore-page",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRestorePage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M482-251q78 0 132-54t54-132q0-78-54-132t-132-54q-45 0-82 19t-61 45v-69h-45v152h154v-45h-75q16-23 46.5-37.5T482-573q60 0 98 38t38 98q0 60-38 98.5T482-300q-48 0-84.5-26T347-393h-51q18 65 68 103.5T482-251ZM160-80v-800h401l239 239v561H160Zm60-60h520v-474L534-820H220v680Zm0 0v-680 680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRestorePage;
