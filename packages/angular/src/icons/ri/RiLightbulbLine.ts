import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-lightbulb-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLightbulbLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.97 18H11V13H13V18H14.03C14.16 16.8 14.77 15.81 15.77 14.72C15.88 14.6 16.6 13.86 16.68 13.75C17.53 12.69 18 11.39 18 10C18 6.69 15.31 4 12 4C8.69 4 6 6.69 6 10C6 11.38 6.47 12.69 7.31 13.75C7.4 13.86 8.12 14.6 8.23 14.72C9.23 15.81 9.84 16.8 9.97 18ZM10 20V21H14V20H10ZM5.75 15C4.66 13.63 4 11.89 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 11.89 19.34 13.63 18.24 15C17.62 15.77 16 17 16 18.5V21C16 22.1 15.1 23 14 23H10C8.9 23 8 22.1 8 21V18.5C8 17 6.37 15.77 5.75 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLightbulbLine;
