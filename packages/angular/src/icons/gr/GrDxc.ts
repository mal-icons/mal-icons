import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-dxc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrDxc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M12,14 L16,21 L8,21 L12,14 Z M12,10 L8,3 L16,3 L12,10 Z M2,18 C0.66,18 -0.01,18 0,18 L0,6 L2,6 C5.31,6 8,8.69 8,12 C8,15.31 5.31,18 2,18 Z M22,18 C18.69,18 16,15.31 16,12 C16,8.69 18.69,6 22,6 L24,6 L24,18 C24.01,18 23.34,18 22,18 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrDxc;
