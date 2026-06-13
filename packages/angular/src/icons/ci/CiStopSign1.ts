import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-stop-sign-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiStopSign1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Stop Sign 1"}],["path",{"d":"M12.53,15.69H10.14a0.50.5,0,0,1,0-1h2.39a1.09,1.09,0,0,0,0-2.19H11.47a2.09,2.09,0,0,1,0-4.19h2.39a0.50.5,0,0,1,0,1H11.47a1.09,1.09,0,0,0,0,2.19h1.06a2.09,2.09,0,0,1,0,4.19Z"}],["path",{"d":"M15.08,21.93H8.92A2.48,2.48,0,0,1,7.15,21.2L2.8,16.85a2.48,2.48,0,0,1-0.73-1.77V8.92A2.49,2.49,0,0,1,2.8,7.15L7.15,2.8A2.48,2.48,0,0,1,8.92,2.07h6.16a2.48,2.48,0,0,1,1.770.73L21.2,7.15a2.48,2.48,0,0,1,0.73,1.77v6.16a2.49,2.49,0,0,1-0.73,1.77L16.85,21.2A2.48,2.48,0,0,1,15.08,21.93ZM8.92,3.07a1.51,1.51,0,0,0-1.060.44L3.51,7.86a1.49,1.49,0,0,0-0.44,1.06v6.16a1.49,1.49,0,0,0,0.44,1.06L7.86,20.49a1.51,1.51,0,0,0,1.060.44h6.16a1.51,1.51,0,0,0,1.06-0.44l4.36-4.35a1.49,1.49,0,0,0,0.44-1.06V8.92a1.51,1.51,0,0,0-0.44-1.06L16.14,3.51a1.51,1.51,0,0,0-1.06-0.44Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiStopSign1;
