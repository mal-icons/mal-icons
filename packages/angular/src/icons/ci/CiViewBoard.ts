import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-view-board",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiViewBoard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"View Board"}],["path",{"d":"M18.44,20.94H5.56a2.5,2.5,0,0,1-2.5-2.5V5.56a2.5,2.5,0,0,1,2.5-2.5H18.44a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.44,20.94ZM5.56,4.06a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.44a1.5,1.5,0,0,0,1.5-1.5V5.56a1.5,1.5,0,0,0-1.5-1.5Z"}],["path",{"d":"M12.5,14.54a0.50.5,0,0,1-1,0v-8h0a0.50.5,0,0,1,1,0Z"}],["path",{"d":"M16.72,12.45a0.50.5,0,0,1-1,0V6.54h0a0.50.5,0,0,1,1,0Z"}],["path",{"d":"M8.28,6.54a0.50.5,0,0,0-1,0h0v4a0.50.5,0,0,0,1,0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiViewBoard;
