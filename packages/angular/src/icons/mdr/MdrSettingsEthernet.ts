import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-settings-ethernet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSettingsEthernet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.71 6.71a11 0 0 0-1.41 0L1.71 11.3a11 0 0 0 0 1.41L6.3 17.3a11 0 1 0 1.41-1.41L3.83 12l3.88-3.88c0.38-0.390.38-1.03 0-1.41zm8.58 0a11 0 0 0 0 1.41L20.17 12l-3.88 3.88a11 0 1 0 1.41 1.41l4.59-4.59a11 0 0 0 0-1.41L17.7 6.7c-0.38-0.38-1.02-0.38-1.410.01zM8 13c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm4 0c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm4-2c-0.55 0-1 0.45-1 1s0.45 1 1 1 1-0.45 1-1-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSettingsEthernet;
