import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-aod-watch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAodWatch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-500v-60h240v60H360Zm40 120v-60h160v60H400ZM366-80l-47-171q-55-35-87-95t-32-134q0-74 32-134.5t87-94.5l47-171h228l47 171q55 34 87 94.5T760-480q0 74-32 134t-87 95L594-80H366Zm114-180q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Zm-87-484q23-7 44.5-10.5T480-758q21 0 42.5 3.5T567-744l-18-76H411l-18 76Zm18 604h138l18-76q-23 6-44.5 9.5T480-203q-21 0-42.5-3.5T393-216l18 76Zm-18-680h174-174Zm18 680h-18 174-156Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAodWatch;
