import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-shield-check-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiShieldCheckFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1L20.22 2.83C20.67 2.93 21 3.33 21 3.8V13.79C21 15.8 20 17.67 18.33 18.78L12 23L5.67 18.78C4 17.67 3 15.8 3 13.79V3.8C3 3.33 3.33 2.93 3.78 2.83L12 1ZM16.45 8.22L11.5 13.17L8.67 10.34L7.26 11.76L11.5 16L17.87 9.64L16.45 8.22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiShieldCheckFill;
