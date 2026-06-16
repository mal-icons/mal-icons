import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-remove-road",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRemoveRoad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 4c-0.55 0-1 0.45-1 1v7c0 0.550.45 1 1 1s1-0.45 1-1V5c0-0.55-0.45-1-1-1zM5 20c0.55 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v14c0 0.550.45 1 1 1zm7-12c0.55 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1s-1 0.45-1 1v2c0 0.550.45 1 1 1zm0 6c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v2c0 0.550.45 1 1 1zm0 6c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v2c0 0.550.45 1 1 1zm9.79-4.29a11 0 0 0-1.41 0L19 17.09l-1.38-1.38a11 0 1 0-1.41 1.41l1.38 1.38-1.38 1.38a11 0 1 0 1.41 1.41L19 19.91l1.38 1.38a11 0 1 0 1.41-1.41l-1.38-1.38 1.38-1.38a11 0 0 0 0-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRemoveRoad;
