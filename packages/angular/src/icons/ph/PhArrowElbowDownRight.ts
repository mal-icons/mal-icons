import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-arrow-elbow-down-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhArrowElbowDownRight {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M213.66,181.66l-48,48a8,8,0,0,1-11.32-11.32L188.69,184H64a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168H188.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,213.66,181.66Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhArrowElbowDownRight;
