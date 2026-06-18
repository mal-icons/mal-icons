import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-menu-search-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMenuSearchFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.62 13.03C17.73 13.64 16.66 14 15.5 14C12.46 14 10 11.54 10 8.5C10 5.46 12.46 3 15.5 3C18.54 3 21 5.46 21 8.5C21 9.66 20.64 10.73 20.03 11.62L22.71 14.29L21.29 15.71L18.62 13.03ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM3 18H21V20H3V18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMenuSearchFill;
