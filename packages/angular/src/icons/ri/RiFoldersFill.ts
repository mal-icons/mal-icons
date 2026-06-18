import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-folders-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFoldersFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 7V4C6 3.45 6.45 3 7 3H13.41L15.41 5H21C21.55 5 22 5.45 22 6V16C22 16.55 21.55 17 21 17H18V20C18 20.55 17.55 21 17 21H3C2.45 21 2 20.55 2 20V8C2 7.45 2.45 7 3 7H6ZM6 9H4V19H16V17H6V9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFoldersFill;
