import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-network-locked",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfNetworkLocked {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.5 10c0.17 0 0.330.030.50.05V1L1 20h13v-3c0-0.890.39-1.68 1-2.23v-0.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5a2.5 2.5 0 0 0-5 0V16c-0.55 0-1 0.45-1 1v4c0 0.550.45 1 1 1h5c0.55 0 1-0.45 1-1v-4c0-0.55-0.45-1-1-1zm-1 0h-3v-1.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5V16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfNetworkLocked;
