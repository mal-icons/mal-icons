import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-mail-lock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMailLock {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-220h530v60H80v-640h800v270h-60v-150L480-463 140-680v460Zm340-307 340-213H140l340 213ZM140-220v-520 520Zm590 60v-190h40v-45q0-30.94 22.04-52.97 22.05-22.03 53-22.03Q876-470 898-447.97q22 22.03 22 52.97v45h40v190H730Zm70-190h90v-44.91Q890-414 877.09-427q-12.91-13-32-13Q826-440 813-427.06 800-414.12 800-395v45Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMailLock;
