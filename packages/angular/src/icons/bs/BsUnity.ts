import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-unity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUnity {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 11.2V3.73L8.61 0v2.87l2.5 1.47c0.10.070.10.2 0 0.23L8.15 6.3c-0.10.07-0.20.03-0.26 0L4.92 4.57c-0.1-0.03-0.1-0.2 0-0.23l2.5-1.47V0L1 3.73V11.2v-0.030.03l2.44-1.43V6.83c0-0.10.13-0.170.2-0.13L6.6 8.43c0.10.070.130.130.130.23v3.47c0 0.1-0.130.17-0.20.13L4.03 10.8l-2.44 1.43L7.98 16l6.39-3.73-2.44-1.43L9.43 12.3c-0.10.07-0.2 0-0.2-0.13V8.7c0-0.10.07-0.20.13-0.23l2.97-1.73c0.1-0.070.2 0 0.20.13V9.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUnity;
