import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-camera",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCamera {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.43,19.93H3.57a1.5,1.5,0,0,1-1.5-1.5V9.29a1.5,1.5,0,0,1,1.5-1.5H6.22a0.50.5,0,0,0,0.5-0.45l0.17-1.8a1.49,1.49,0,0,1,1.5-1.45h7.23a1.5,1.5,0,0,1,1.5,1.5l0.16,1.76a0.50.5,0,0,0,0.50.45h2.66a1.5,1.5,0,0,1,1.5,1.5v9.14A1.5,1.5,0,0,1,20.43,19.93ZM3.57,8.79a0.50.5,0,0,0-0.50.5v9.14a0.50.5,0,0,0,0.50.5h16.87a0.50.5,0,0,0,0.5-0.5V9.29a0.50.5,0,0,0-0.5-0.5H17.78a1.5,1.5,0,0,1-1.49-1.36l-0.17-1.8a0.520.52,0,0,0-0.5-0.55H8.39a0.50.5,0,0,0-0.50.5L7.72,7.42A1.5,1.5,0,0,1,6.22,8.79Z"}],["path",{"d":"M12,17.28a4,4,0,1,1,4-4A4,4,0,0,1,12,17.28Zm0-7a3,3,0,1,0,3,3A3,3,0,0,0,12,10.28Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCamera;
