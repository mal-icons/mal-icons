import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-user-5-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiUser5Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.39 16.54C5.34 15.09 4 12.7 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 12.7 18.66 15.09 16.61 16.54L18.69 21.3C18.8 21.55 18.69 21.85 18.44 21.96C18.37 21.99 18.3 22 18.24 22H5.76C5.49 22 5.26 21.78 5.26 21.5C5.26 21.43 5.28 21.36 5.31 21.3L7.39 16.54ZM14.12 15.85L15.46 14.91C17.04 13.79 18 11.98 18 10C18 6.69 15.31 4 12 4C8.69 4 6 6.69 6 10C6 11.98 6.96 13.79 8.54 14.91L9.88 15.85L8.06 20H15.94L14.12 15.85ZM8.12 10.97L10.06 10.49C10.28 11.36 11.06 12 12 12C12.94 12 13.72 11.36 13.94 10.49L15.88 10.97C15.45 12.71 13.87 14 12 14C10.13 14 8.55 12.71 8.12 10.97Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiUser5Line;
