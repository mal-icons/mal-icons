import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-move-to-top-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMoveToTop24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.75 3.5a0.750.75 0 0 1 0-1.5h14.5a0.750.75 0 0 1 0 1.5H4.75Zm0.47 9.47a0.750.75 0 1 0 1.06 1.06l4.97-4.97V21.25a0.750.75 0 0 0 1.5 0V9.06l4.97 4.97a0.750.75 0 1 0 1.06-1.06l-6.25-6.25a0.750.75 0 0 0-1.06 0l-6.25 6.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMoveToTop24;
