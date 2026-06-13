import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-scale",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoScale {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M368,32H144A112.12,112.12,0,0,0,32,144V368A112.12,112.12,0,0,0,144,480H368A112.12,112.12,0,0,0,480,368V144A112.12,112.12,0,0,0,368,32Zm36.21,178-33.32,39.21A41.76,41.76,0,0,1,339,264.05a42.32,42.32,0,0,1-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47,10.47-60.69,19.25a41.86,41.86,0,0,1-54.2-8.46L107.79,210a50.48,50.48,0,0,1,4.49-70.27C140.12,114.38,187.65,84.16,256,84.16s115.88,30.22,143.72,55.57A50.48,50.48,0,0,1,404.21,210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoScale;
