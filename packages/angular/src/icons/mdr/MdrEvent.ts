import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-event",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEvent {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 13h-3c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1zm0-10v1H8V3c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H5c-1.11 0-1.990.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2h-1V3c0-0.55-0.45-1-1-1s-1 0.45-1 1zm2 17H6c-0.55 0-1-0.45-1-1V9h14v10c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEvent;
