import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-zoom-in-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcZoomIn16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.75 7.5a0.750.75 0 0 1 0.75-0.75h2.25V4.5a0.750.75 0 0 1 1.5 0v2.25h2.25a0.750.75 0 0 1 0 1.5H8.25v2.25a0.750.75 0 0 1-1.5 0V8.25H4.5a0.750.75 0 0 1-0.75-0.75Z"}],["path",{"d":"M7.5 0a7.5 7.5 0 0 1 5.81 12.25l2.47 2.47a0.750.75 0 1 1-1.06 1.06l-2.47-2.47A7.5 7.5 0 1 1 7.5 0Zm-6 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcZoomIn16;
