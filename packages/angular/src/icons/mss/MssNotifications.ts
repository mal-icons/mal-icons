import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-notifications",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNotifications {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-200v-60h84v-306q0-82 49.5-148.5T424-798v-82h112v82q81 17 131 83.5T717-566v306h83v60H160Zm320-295Zm0 415q-32 0-56-23.5T400-160h160q0 33-23.5 56.5T480-80ZM304-260h353v-306q0-75-50.5-126.5T481-744q-74 0-125.5 51.5T304-566v306Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNotifications;
