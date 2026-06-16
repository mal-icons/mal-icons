import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-directory-sync",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDirectorySync {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M238-211q-57-53-87.5-122.5T120-480q0-150 105-255t255-105v-80l183 140-183 140v-80q-100 0-170 70t-70 170q0 57 25 107.5t67 88.5l-94 73ZM480-40 297-180l183-140v80q100 0 170-70t70-170q0-57-25-108t-70-88l95-71q58 51 89 120.5T840-480q0 150-105 255T480-120v80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDirectorySync;
