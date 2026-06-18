import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-arrow-up-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhArrowUpLeft {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M197.66,197.66a8,8,0,0,1-11.32,0L72,83.31V168a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H168a8,8,0,0,1,0,16H83.31L197.66,186.34A8,8,0,0,1,197.66,197.66Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhArrowUpLeft;
