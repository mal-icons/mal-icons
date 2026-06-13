import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-bandage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiBandage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.43,7.5H6.57a4.5,4.5,0,0,0,0,9h10.87a4.5,4.5,0,0,0,0-9Zm-9.93,8h-0.94a3.5,3.5,0,0,1,0-7h0.94Zm8,0h-7v-7h7Zm1.93,0h-0.93v-7h0.93a3.5,3.5,0,0,1,0,7Z"}],["circle",{"cx":"10.25","cy":"10.5","r":"0.63"}],["circle",{"cx":"10.25","cy":"13.5","r":"0.63"}],["circle",{"cx":"13.75","cy":"10.5","r":"0.63"}],["circle",{"cx":"13.75","cy":"13.5","r":"0.63"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiBandage;
