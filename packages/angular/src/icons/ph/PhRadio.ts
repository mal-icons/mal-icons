import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-radio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhRadio {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M104,176a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H96A8,8,0,0,1,104,176Zm-8-40H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Zm0-32H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16ZM232,88V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V80a8,8,0,0,1,5.7-7.66l160-48a8,8,0,0,1,4.6,15.33L86.51,72H216A16,16,0,0,1,232,88ZM216,200V88H40V200H216Zm-16-56a40,40,0,1,1-40-40A40,40,0,0,1,200,144Zm-16,0a24,24,0,1,0-24,24A24,24,0,0,0,184,144Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhRadio;
