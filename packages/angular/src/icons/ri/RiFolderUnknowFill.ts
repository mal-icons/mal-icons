import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-folder-unknow-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFolderUnknowFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.41 5H21C21.55 5 22 5.45 22 6V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H10.41L12.41 5ZM11 16V18H13V16H11ZM8.57 10.81L10.53 11.21C10.67 10.52 11.27 10 12 10C12.83 10 13.5 10.67 13.5 11.5C13.5 12.33 12.83 13 12 13H11V15H12C13.93 15 15.5 13.43 15.5 11.5C15.5 9.57 13.93 8 12 8C10.3 8 8.89 9.21 8.57 10.81Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFolderUnknowFill;
