import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-refund-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRefund2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C17.53 2 22 6.48 22 12C22 17.52 17.53 22 12 22C9.58 22 7.35 21.14 5.62 19.7L5.38 19.49L6.28 17.59C7.73 19.08 9.76 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.67 4 4.14 7.45 4.01 11.75L4 12H6.5L3.8 17.72C2.67 16.1 2 14.13 2 12C2 6.48 6.48 2 12 2ZM13 6V8H15.5V10H10C9.73 10 9.5 10.22 9.5 10.5C9.5 10.75 9.68 10.95 9.92 10.99L10 11H14C15.39 11 16.5 12.12 16.5 13.5C16.5 14.88 15.39 16 14 16H13V18H11V16H8.5V14H14C14.28 14 14.5 13.78 14.5 13.5C14.5 13.25 14.33 13.05 14.09 13.01L14 13H10C8.62 13 7.5 11.88 7.5 10.5C7.5 9.12 8.62 8 10 8H11V6H13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRefund2Fill;
