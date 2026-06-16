import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-mail-lock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMailLock {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M143-160q-25 0-44-18.5T80-220v-520q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-740v210h-60v-150L480-463 140-680v460h530v60H143Zm337-367 340-213H140l340 213ZM140-220v-520 520Zm625 60q-14 0-24.5-10.5T730-195v-120q0-14 11.5-24.5T770-350v-45q0-30.94 22.04-52.97 22.05-22.03 53-22.03Q876-470 898-447.97q22 22.03 22 52.97v45q17 0 28.5 10.5T960-315v120q0 14-10.5 24.5T925-160H765Zm35-190h90v-44.91Q890-414 877.09-427q-12.91-13-32-13Q826-440 813-427.06 800-414.12 800-395v45Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMailLock;
