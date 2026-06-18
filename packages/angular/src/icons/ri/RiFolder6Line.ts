import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-folder-6-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFolder6Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4C2 3.45 2.45 3 3 3H10.41L12.41 5H21C21.55 5 22 5.45 22 6V20C22 20.55 21.55 21 21 21L3 21C2.45 21 2 20.55 2 20V4ZM10.59 6L9.59 5H4V7H9.59L10.59 6ZM4 9V19L20 19V7H12.41L10.41 9H4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFolder6Line;
