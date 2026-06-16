import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-girl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrGirl {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 7.5c0.97 0 1.75-0.78 1.75-1.75S12.97 4 12 4s-1.750.78-1.75 1.75S11.03 7.5 12 7.5zm2 8.5v3c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-3h-0.56c-0.7 0-1.18-0.7-0.94-1.35l1.88-5.03a1.73 1.73 0 0 1 3.24 0l1.88 5.03c0.240.65-0.24 1.35-0.94 1.35H14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrGirl;
