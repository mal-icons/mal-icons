import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-subscript-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSubscript2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 6V19H9V6H3V4H17V6H11ZM19.55 16.58C19.7 16.43 19.8 16.23 19.8 16C19.8 15.56 19.44 15.2 19 15.2C18.56 15.2 18.2 15.56 18.2 16C18.2 16.08 18.21 16.15 18.23 16.22L17.08 16.55C17.03 16.38 17 16.19 17 16C17 14.9 17.9 14 19 14C20.1 14 21 14.9 21 16C21 16.57 20.76 17.09 20.37 17.45L18.74 19H21V20H17V19L19.55 16.58V16.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSubscript2;
