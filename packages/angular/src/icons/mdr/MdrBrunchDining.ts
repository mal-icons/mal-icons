import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-brunch-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBrunchDining {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 8h2V4h-2v4zm-3 14H3c-0.55 0-1-0.45-1-1v-1h14v1c0 0.55-0.45 1-1 1zm3-6.11-0.4-0.42a5.79 5.79 0 0 1-1.6-4V3c0-0.550.45-1 1-1h4c0.55 0 1 0.45 1 1v8.51c0 1.46-0.54 2.87-1.53 3.94l-0.470.52V20h1c0.55 0 1 0.45 1 1s-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-5.11zM7 16v-1c0-0.550.45-1 1-1h2c0.55 0 1 0.45 1 1v1h4c0.55 0 1 0.45 1 1v1H2v-1c0-0.550.45-1 1-1h4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBrunchDining;
