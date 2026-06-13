import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-no-waiting-sign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiNoWaitingSign {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"No Watting Sign"}],["path",{"d":"M12,2.07a9.93,9.93,0,1,0,7.03,16.950.370.37,0,0,0,0.06-0.07A9.84,9.84,0,0,0,21.94,12,9.94,9.94,0,0,0,12,2.07Zm0,18.86A8.95,8.95,0,0,1,3.07,12a8.84,8.84,0,0,1,2.28-5.95l12.61,12.61A8.93,8.93,0,0,1,12,20.93Zm6.67-2.98L6.05,5.34a8.93,8.93,0,0,1,12.62,12.61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiNoWaitingSign;
