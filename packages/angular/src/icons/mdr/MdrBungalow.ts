import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-bungalow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBungalow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 16c0.55 0 1 0.45 1 1v4h3c0.55 0 1-0.45 1-1v-5.21l0.570.92a1 1 0 0 0 1.7-1.06L12.85 4.36a1 1 0 0 0-1.7 0L4.73 14.65c-0.290.47-0.15 1.090.32 1.380.470.29 1.080.15 1.38-0.32L7 14.8V20c0 0.550.45 1 1 1h3v-4c0-0.550.45-1 1-1zm1-3c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBungalow;
