import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-window-restore",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWindowRestore {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 12 9 L 12 13 L 9 13 L 9 23 L 20 23 L 20 19 L 23 19 L 23 9 Z M 14 11 L 21 11 L 21 12 L 14 12 Z M 14 14 L 21 14 L 21 17 L 14 17 Z M 11 15 L 12 15 L 12 16.03 L 11 16.03 Z M 11 18.03 L 12 18.03 L 12 19 L 18 19 L 18 21 L 11 21 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWindowRestore;
