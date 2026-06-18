import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-folder-shared-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFolderSharedFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 13.13C21.01 12.42 19.81 12 18.5 12C15.19 12 12.5 14.69 12.5 18C12.5 19.09 12.79 20.12 13.3 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H10.41L12.41 5H21C21.55 5 22 5.45 22 6V13.13ZM18 17V13.5L23 18L18 22.5V19H15V17H18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFolderSharedFill;
