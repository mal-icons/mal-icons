import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewList {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 14h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1zm0 5h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1zM4 9h2c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1zm5 5h11c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1H9c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1zm0 5h11c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1H9c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1zM8 6v2c0 0.550.45 1 1 1h11c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1H9c-0.55 0-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewList;
