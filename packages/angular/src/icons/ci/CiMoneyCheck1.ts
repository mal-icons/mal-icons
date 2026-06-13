import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-money-check-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiMoneyCheck1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Money Check 1"}],["path",{"d":"M19.44,18.22H4.56a2.5,2.5,0,0,1-2.5-2.5V8.28a2.5,2.5,0,0,1,2.5-2.5H19.44a2.5,2.5,0,0,1,2.5,2.5v7.44A2.5,2.5,0,0,1,19.44,18.22ZM4.56,6.78a1.5,1.5,0,0,0-1.5,1.5v7.44a1.5,1.5,0,0,0,1.5,1.5H19.44a1.5,1.5,0,0,0,1.5-1.5V8.28a1.5,1.5,0,0,0-1.5-1.5Z"}],["path",{"d":"M12,12.79H5.06a0.50.5,0,0,1,0-1H12a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M14,15.71H5.06a0.50.5,0,1,1,0-1H14a0.50.5,0,0,1,0,1Z"}],["rect",{"x":"15.44","y":"8.28","width":"4","height":"2","rx":"0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiMoneyCheck1;
