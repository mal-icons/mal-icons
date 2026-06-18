import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-vip-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiVipLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 19H22V21H2V19ZM11 8H13V16H11V8ZM7.97 8L6.11 13.11L4.25 8H2.12L5.11 15.96H7.11L10.09 8H7.97ZM17 14V16H15V8H19C20.66 8 22 9.34 22 11C22 12.66 20.66 14 19 14H17ZM17 10V12H19C19.56 12 20 11.55 20 11C20 10.45 19.56 10 19 10H17ZM2 3H22V5H2V3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiVipLine;
