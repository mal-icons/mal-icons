import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-mobile-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMobile3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Mobile 3"}],["path",{"d":"M16.73,2.07H7.27a2.39,2.39,0,0,0-2.24,2.5v14.87a2.39,2.39,0,0,0,2.24,2.5h9.46a2.39,2.39,0,0,0,2.24-2.5V4.57A2.39,2.39,0,0,0,16.73,2.07Zm1.24,17.37a1.39,1.39,0,0,1-1.24,1.5H7.27a1.39,1.39,0,0,1-1.24-1.5V4.57a1.39,1.39,0,0,1,1.24-1.5H8.8v0.51a1,1,0,0,0,1,1h4.4a1,1,0,0,0,1-1v-0.51h1.53a1.39,1.39,0,0,1,1.24,1.5Z"}],["path",{"d":"M10,18.93h4a0.50.5,0,0,0,0-1H10a0.50.5,0,0,0,0,1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMobile3;
