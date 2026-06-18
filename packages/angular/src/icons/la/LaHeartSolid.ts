import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-heart-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaHeartSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.5,5c-2.89,0-5.33,1.8-6.5,2.85C14.83,6.8,12.39,5,9.5,5C5.36,5,2,8.36,2,12.5c0,2.59,2.37,4.95,2.46,5.04 L16,29.08l11.53-11.53C27.64,17.45,30,15.09,30,12.5C30,8.36,26.64,5,22.5,5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaHeartSolid;
