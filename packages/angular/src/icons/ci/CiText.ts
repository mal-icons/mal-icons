import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-text",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiText {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.44,2.06H5.56a1.5,1.5,0,0,0-1.5,1.5v4.5a0.50.5,0,0,0,1,0v-1H10V20.94H8a0.50.5,0,0,0,0,1h8a0.50.5,0,0,0,0-1H14V7.06h4.94v1a0.50.5,0,0,0,1,0V3.56A1.5,1.5,0,0,0,18.44,2.06Zm0.5,4H14a1,1,0,0,0-1,1V20.94H11V7.06a1,1,0,0,0-1-1H5.06V3.56a0.50.5,0,0,1,0.5-0.5H18.44a0.50.5,0,0,1,0.50.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiText;
