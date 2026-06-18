import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-share-forward-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiShareForwardLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 14H11C7.54 14 4.54 15.95 3.03 18.81C3.01 18.54 3 18.27 3 18C3 12.48 7.48 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.31L20.32 11L15 6.69V10H13C10.58 10 8.41 11.07 6.94 12.77C8.21 12.27 9.58 12 11 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiShareForwardLine;
