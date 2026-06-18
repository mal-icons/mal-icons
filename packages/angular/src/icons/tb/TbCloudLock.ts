import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cloud-lock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCloudLock {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 18a3.5 3.5 0 0 0 0 -7h-1c0.4 -1.77 -0.28 -3.59 -1.79 -4.79c-1.5 -1.19 -3.6 -1.57 -5.5 -1s-3.31 2.02 -3.71 3.79c-2.2 -0.09 -4.15 1.33 -4.67 3.37c-0.51 2.05 0.56 4.15 2.57 5.03"}],["path",{"d":"M8 16a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -3"}],["path",{"d":"M10 15v-2a2 2 0 1 1 4 0v2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCloudLock;
