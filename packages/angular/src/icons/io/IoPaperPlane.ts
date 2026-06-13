import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-paper-plane",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoPaperPlane {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M473,39.05a24,24,0,0,0-25.5-5.46L47.47,185l-0.08,0a24,24,0,0,0,1,45.16l0.410.13,137.3,58.63a16,16,0,0,0,15.54-3.59L422,80a7.07,7.07,0,0,1,10,10L226.66,310.26a16,16,0,0,0-3.59,15.54l58.65,137.38c0.060.20.120.380.190.57,3.2,9.27,11.3,15.81,21.09,16.250.43,0,0.58,0,1,0a24.63,24.63,0,0,0,23-15.46L478.39,64.62A24,24,0,0,0,473,39.05Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoPaperPlane;
