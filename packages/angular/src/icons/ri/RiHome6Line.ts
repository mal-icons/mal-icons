import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-home-6-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiHome6Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9.49C3 9.18 3.14 8.89 3.39 8.7L11.39 2.48C11.75 2.2 12.25 2.2 12.61 2.48L20.61 8.7C20.86 8.89 21 9.18 21 9.49V20ZM19 19V9.98L12 4.53L5 9.98V19H19ZM7 15H17V17H7V15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiHome6Line;
