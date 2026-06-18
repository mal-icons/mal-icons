import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-currency-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCurrencyLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 16H19V4H9V6H17V16ZM17 18V21C17 21.55 16.55 22 16 22H4.01C3.46 22 3 21.56 3 21L3.01 7C3.01 6.45 3.46 6 4.01 6H7V3C7 2.45 7.45 2 8 2H20C20.56 2 21 2.45 21 3V17C21 17.56 20.56 18 20 18H17ZM5.01 8L5.01 20H15V8H5.01ZM7 16H11.5C11.78 16 12 15.78 12 15.5C12 15.23 11.78 15 11.5 15H8.5C7.12 15 6 13.88 6 12.5C6 11.12 7.12 10 8.5 10H9V9H11V10H13V12H8.5C8.23 12 8 12.23 8 12.5C8 12.78 8.23 13 8.5 13H11.5C12.89 13 14 14.12 14 15.5C14 16.88 12.89 18 11.5 18H11V19H9V18H7V16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCurrencyLine;
