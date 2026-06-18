import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-shut-down-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiShutDownLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.26 3.81L7.41 5.45C5.35 6.89 4 9.29 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 9.29 18.65 6.89 16.59 5.45L17.74 3.81C20.31 5.62 22 8.61 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 8.61 3.69 5.62 6.26 3.81ZM11 12V2H13V12H11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiShutDownLine;
