import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-align-center",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatAlignCenter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 16c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1s-0.45-1-1-1H8c-0.55 0-1 0.45-1 1zm-3 5h16c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0-8h16c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1zm3-5c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1s-0.45-1-1-1H8c-0.55 0-1 0.45-1 1zM3 4c0 0.550.45 1 1 1h16c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatAlignCenter;
