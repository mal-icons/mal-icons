import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sd-card-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSdCardLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 7.83V20H18V4H9.83L6 7.83ZM4.29 6.71L9 2H19C19.55 2 20 2.45 20 3V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V7.41C4 7.15 4.11 6.89 4.29 6.71ZM15 5H17V9H15V5ZM12 5H14V9H12V5ZM9 6H11V9H9V6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSdCardLine;
