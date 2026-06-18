import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-tumblr-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTumblrFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.27 7.63C8.87 7.07 10.82 4.76 10.82 2H13.85V7.15H17.48V10.79H13.85V16.24C13.85 16.76 14.04 17.45 14.76 17.91C15.23 18.22 16.24 18.37 17.79 18.36V22H13.54C11.03 22 9 19.96 9 17.45V10.79H6.27V7.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTumblrFill;
