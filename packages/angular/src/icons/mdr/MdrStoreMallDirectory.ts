import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-store-mall-directory",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrStoreMallDirectory {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.16 7.8c-0.09-0.46-0.5-0.8-0.98-0.8H4.82c-0.48 0-0.890.34-0.980.8L3 12v1c0 0.550.45 1 1 1v5c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1v-5h4v5c0 0.550.45 1 1 1s1-0.45 1-1v-5c0.55 0 1-0.45 1-1v-1l-0.84-4.2zM12 18H6v-4h6v4zM5 6h14c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-0.55 0-1 0.45-1 1s0.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrStoreMallDirectory;
