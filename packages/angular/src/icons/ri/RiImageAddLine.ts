import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-image-add-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiImageAddLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 15V18H24V20H21V23H19V20H16V18H19V15H21ZM21.01 3C21.56 3 22 3.44 22 3.99V13H20V5H4V19L14 9L17 12V14.83L14 11.83L6.83 19H14V21H2.99C2.44 21 2 20.56 2 20.01V3.99C2 3.44 2.46 3 2.99 3H21.01ZM8 7C9.1 7 10 7.9 10 9C10 10.1 9.1 11 8 11C6.9 11 6 10.1 6 9C6 7.9 6.9 7 8 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiImageAddLine;
