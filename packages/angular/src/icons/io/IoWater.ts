import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-water",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoWater {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M265.12,60.12a12,12,0,0,0-18.23,0C215.23,97.15,112,225.17,112,320c0,88.37,55.64,144,144,144s144-55.63,144-144C400,225.17,296.77,97.15,265.12,60.12ZM272,412a12,12,0,0,1-11.34-16,11.89,11.89,0,0,1,11.41-8A60.06,60.06,0,0,0,332,328.07a11.89,11.89,0,0,1,8-11.41A12,12,0,0,1,356,328,84.09,84.09,0,0,1,272,412Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoWater;
