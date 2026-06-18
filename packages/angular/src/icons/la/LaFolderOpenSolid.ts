import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-folder-open-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFolderOpenSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 3 L 5 27.81 L 5.78 27.97 L 17.78 30.47 L 19 30.72 L 19 28 L 25 28 L 25 15.44 L 26.72 13.72 L 27 13.41 L 27 3 Z M 14.13 5 L 25 5 L 25 12.56 L 23.28 14.28 L 23 14.59 L 23 26 L 19 26 L 19 17.09 L 18.72 16.78 L 17 15.06 L 17 5.72 Z M 7 5.28 L 15 7.28 L 15 15.91 L 15.28 16.22 L 17 17.94 L 17 28.28 L 7 26.19 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFolderOpenSolid;
