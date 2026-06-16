import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-grid-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdGridOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4v0.89l2 2V4h4v4h-2.89l2 2H14v0.89l2 2V10h4v4h-2.89l2 2H20v0.89l2 2V4c0-1.1-0.9-2-2-2H5.11l2 2H8zm8 0h4v4h-4V4zM1.41 1.14 0 2.55l2 2V20c0 1.10.9 2 2 2h15.45l2.01 2.01 1.41-1.41L1.41 1.14zM10 12.55 11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l0.550.55V14zm6 6h-4v-4h3.45l0.550.55V20zm2 0v-1.45L17.45 20H16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdGridOff;
