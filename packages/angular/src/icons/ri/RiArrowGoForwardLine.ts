import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-arrow-go-forward-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiArrowGoForwardLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.17 7H11C7.69 7 5 9.69 5 13C5 16.31 7.69 19 11 19H20V21H11C6.58 21 3 17.42 3 13C3 8.58 6.58 5 11 5H18.17L15.64 2.46L17.05 1.05L22 6L17.05 10.95L15.64 9.54L18.17 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiArrowGoForwardLine;
