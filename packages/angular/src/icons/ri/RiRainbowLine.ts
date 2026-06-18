import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-rainbow-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRainbowLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4C18.08 4 23 8.92 23 15V20H21V15C21 10.12 17.11 6.14 12.27 6L12 6C7.12 6 3.14 9.89 3 14.73L3 15V20H1V15C1 8.92 5.92 4 12 4ZM12 8C15.87 8 19 11.13 19 15V20H17V15C17 12.31 14.88 10.12 12.22 10L12 10C9.31 10 7.12 12.12 7 14.78L7 15V20H5V15C5 11.13 8.13 8 12 8ZM12 12C13.66 12 15 13.34 15 15V20H13V15C13 14.49 12.61 14.06 12.12 14.01L12 14C11.49 14 11.06 14.39 11.01 14.88L11 15V20H9V15C9 13.34 10.34 12 12 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRainbowLine;
