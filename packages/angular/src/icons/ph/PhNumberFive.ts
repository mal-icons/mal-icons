import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-number-five",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhNumberFive {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M176,160a56,56,0,0,1-93.33,41.74,8,8,0,1,1,10.66-11.92,40,40,0,1,0,0.77-60.3,8,8,0,0,1-13-7.66L96.16,46.43A8,8,0,0,1,104,40h64a8,8,0,0,1,0,16H110.56l-10.32,51.6A56,56,0,0,1,176,160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhNumberFive;
