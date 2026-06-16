import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-edit-notifications",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssEditNotifications {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M484-421v-50l229-229 50 50-229 229h-50Zm305-255 50-50-50-50-50 50 50 50ZM160-200v-60h84v-306q0-85 50.5-150T424-798v-82h112v82.38Q573-792 601-773.5t55 45.5l-43 43q-28-29-60-44t-73-15q-75 0-125.5 51.5T304-566v306h353v-199l60-60v259h83v60H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm1-422Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssEditNotifications;
