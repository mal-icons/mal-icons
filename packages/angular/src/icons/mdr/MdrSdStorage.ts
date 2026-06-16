import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sd-storage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSdStorage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 2h-7.17c-0.53 0-1.040.21-1.420.59L4.6 7.42c-0.370.37-0.60.88-0.6 1.4V20c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-7 6c-0.55 0-1-0.45-1-1V5c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1zm3 0c-0.55 0-1-0.45-1-1V5c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1zm3 0c-0.55 0-1-0.45-1-1V5c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSdStorage;
