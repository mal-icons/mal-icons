import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-day",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewDay {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 21h17c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1v1c0 0.550.45 1 1 1zM20 8H3c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h17c0.55 0 1-0.45 1-1V9c0-0.55-0.45-1-1-1zM2 4v1c0 0.550.45 1 1 1h17c0.55 0 1-0.45 1-1V4c0-0.55-0.45-1-1-1H3c-0.55 0-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewDay;
