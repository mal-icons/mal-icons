import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-slash-commands-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSlashCommands2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 2C3.34 2 2 3.34 2 5V19C2 20.66 3.34 22 5 22H19C20.66 22 22 20.66 22 19V5C22 3.34 20.66 2 19 2H5ZM4 5C4 4.45 4.45 4 5 4H19C19.55 4 20 4.45 20 5V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V5ZM9.72 18L16.58 6H14.28L7.42 18H9.72Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSlashCommands2;
