import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-notification-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNotificationAdd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-200v-60h84v-306q0-82 49.5-148.5T424-798v-29q0-23 16.27-38 16.26-15 39.5-15Q503-880 519.5-865t16.5 38v29q25 5 50.5 17.5T631-751l-21.5 21.5L588-708q-22-18-50.5-27t-57.89-9Q405-744 354.5-692.5T304-566v306h353v-148h60v148h83v60H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm290-360v-130H640v-60h130v-130h60v130h130v60H830v130h-60Zm-289-62Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNotificationAdd;
