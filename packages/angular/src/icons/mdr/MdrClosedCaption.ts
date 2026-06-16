import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-closed-caption",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrClosedCaption {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-8 6.5c0 0.28-0.220.5-0.50.5H10c-0.28 0-0.5-0.22-0.5-0.5h-2v3h2c0-0.280.22-0.50.5-0.5h0.5c0.28 0 0.50.220.50.5v0.5c0 0.55-0.45 1-1 1H7c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v0.5zm7 0c0 0.28-0.220.5-0.50.5H17c-0.28 0-0.5-0.22-0.5-0.5h-2v3h2c0-0.280.22-0.50.5-0.5h0.5c0.28 0 0.50.220.50.5v0.5c0 0.55-0.45 1-1 1h-3c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v0.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrClosedCaption;
