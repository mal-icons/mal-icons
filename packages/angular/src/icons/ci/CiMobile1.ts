import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-mobile-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMobile1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Mobile 1"}],["path",{"d":"M10,18.93h4a0.50.5,0,0,0,0-1H10a0.50.5,0,0,0,0,1Z"}],["path",{"d":"M16.73,21.94H7.27a2.38,2.38,0,0,1-2.24-2.5V4.56a2.38,2.38,0,0,1,2.24-2.5h9.45a2.38,2.38,0,0,1,2.24,2.5V19.44A2.38,2.38,0,0,1,16.73,21.94ZM7.27,3.06a1.39,1.39,0,0,0-1.24,1.5V19.44a1.39,1.39,0,0,0,1.24,1.5h9.45a1.39,1.39,0,0,0,1.24-1.5V4.56a1.39,1.39,0,0,0-1.24-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMobile1;
