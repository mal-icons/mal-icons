import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-coins-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCoins1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Coins 1"}],["path",{"d":"M18.46,10.91a3.47,3.47,0,0,0-2.47,1.04,2.3,2.3,0,0,0-0.86-1.73,2.26,2.26,0,0,0,0.86-1.78,2.29,2.29,0,0,0-2.28-2.29H4.35a2.28,2.28,0,0,0-1.43,4.07,2.28,2.28,0,0,0,0,3.57,2.28,2.28,0,0,0,1.43,4.06h9.36a2.29,2.29,0,0,0,2.06-1.29,3.43,3.43,0,0,0,2.69,1.3,3.48,3.48,0,1,0,0-6.95Zm-4.75,5.94H4.35a1.28,1.28,0,1,1,0-2.56h9.36a1.28,1.28,0,1,1,0,2.56Zm0-3.56H4.35a1.29,1.29,0,1,1,0-2.57h9.36a1.29,1.29,0,0,1,0,2.57Zm0-3.57H4.35a1.29,1.29,0,1,1,0-2.57h9.36a1.29,1.29,0,0,1,0,2.57Zm4.75,7.14a2.48,2.48,0,1,1,2.48-2.48A2.48,2.48,0,0,1,18.46,16.86Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCoins1;
