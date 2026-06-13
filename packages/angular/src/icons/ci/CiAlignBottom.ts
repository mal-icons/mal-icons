import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-align-bottom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiAlignBottom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Align Bottom"}],["path",{"d":"M3.55,20.92h16.9a0.50.5,0,0,0,0-1H3.55a0.50.5,0,0,0,0,1Z"}],["path",{"d":"M9,18.92H6.57a2.5,2.5,0,0,1-2.5-2.5V5.58a2.5,2.5,0,0,1,2.5-2.5H9a2.5,2.5,0,0,1,2.5,2.5V16.42A2.5,2.5,0,0,1,9,18.92ZM6.57,4.08a1.5,1.5,0,0,0-1.5,1.5V16.42a1.5,1.5,0,0,0,1.5,1.5H9a1.5,1.5,0,0,0,1.5-1.5V5.58A1.5,1.5,0,0,0,9,4.08Z"}],["path",{"d":"M17.44,18.92H15a2.5,2.5,0,0,1-2.5-2.5V10.55A2.5,2.5,0,0,1,15,8.05h2.43a2.5,2.5,0,0,1,2.5,2.5v5.87A2.5,2.5,0,0,1,17.44,18.92ZM15,9.05a1.5,1.5,0,0,0-1.5,1.5v5.87a1.5,1.5,0,0,0,1.5,1.5h2.43a1.5,1.5,0,0,0,1.5-1.5V10.55a1.5,1.5,0,0,0-1.5-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiAlignBottom;
