import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-pause-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiPause1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Pause 1"}],["path",{"d":"M8.25,21.94H6.56a2.5,2.5,0,0,1-2.5-2.5V4.56a2.5,2.5,0,0,1,2.5-2.5H8.25a2.5,2.5,0,0,1,2.5,2.5V19.44A2.5,2.5,0,0,1,8.25,21.94ZM6.56,3.06a1.5,1.5,0,0,0-1.5,1.5V19.44a1.5,1.5,0,0,0,1.5,1.5H8.25a1.5,1.5,0,0,0,1.5-1.5V4.56a1.5,1.5,0,0,0-1.5-1.5Z"}],["path",{"d":"M17.44,21.94H15.75a2.5,2.5,0,0,1-2.5-2.5V4.56a2.5,2.5,0,0,1,2.5-2.5h1.69a2.5,2.5,0,0,1,2.5,2.5V19.44A2.5,2.5,0,0,1,17.44,21.94ZM15.75,3.06a1.5,1.5,0,0,0-1.5,1.5V19.44a1.5,1.5,0,0,0,1.5,1.5h1.69a1.5,1.5,0,0,0,1.5-1.5V4.56a1.5,1.5,0,0,0-1.5-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiPause1;
