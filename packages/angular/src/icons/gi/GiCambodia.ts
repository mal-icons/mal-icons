import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-cambodia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCambodia {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M19.82 176.29c52.63-142.71 221.12-88.05 332.74-44.2l-13.41-41.72c41.19-20.77 48.6-23.36 81.94 3.97l59.1-35.76-15.89 52.64c44.04 50.13 22.32 108.16 23.84 163.39l-155.17 71.97 37.96 75.52c-21.92 3.05-62.45-14.29-101.31-8.44l-11.9 37.61-119.7 2.12C50.9 387.05 33.05 278.67 19.82 176.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCambodia;
