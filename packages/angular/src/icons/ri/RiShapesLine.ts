import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-shapes-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiShapesLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1L6 11H18L12 1ZM12 4.89L14.47 9H9.53L12 4.89ZM6.75 20C5.23 20 4 18.77 4 17.25C4 15.73 5.23 14.5 6.75 14.5C8.27 14.5 9.5 15.73 9.5 17.25C9.5 18.77 8.27 20 6.75 20ZM6.75 22C9.37 22 11.5 19.87 11.5 17.25C11.5 14.63 9.37 12.5 6.75 12.5C4.13 12.5 2 14.63 2 17.25C2 19.87 4.13 22 6.75 22ZM15 15.5V19.5H19V15.5H15ZM13 21.5V13.5H21V21.5H13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiShapesLine;
