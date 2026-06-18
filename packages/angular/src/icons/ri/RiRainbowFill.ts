import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-rainbow-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRainbowFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4C18.08 4 23 8.92 23 15V20H20V15C20 10.67 16.55 7.14 12.25 7L12 7C7.67 7 4.14 10.45 4 14.75L4 15V20H1V15C1 8.92 5.92 4 12 4ZM12 8C15.87 8 19 11.13 19 15V20H16V15C16 12.86 14.32 11.11 12.2 11L12 11C9.86 11 8.11 12.68 8 14.8L8 15V20H5V15C5 11.13 8.13 8 12 8ZM12 12C13.66 12 15 13.34 15 15V20H9V15C9 13.34 10.34 12 12 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRainbowFill;
