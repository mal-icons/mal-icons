import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-list-bulleted",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatListBulleted {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 10.5c-0.83 0-1.50.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zm0-6c-0.83 0-1.50.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-0.83 0-1.50.68-1.5 1.5s0.68 1.5 1.5 1.5 1.5-0.68 1.5-1.5-0.67-1.5-1.5-1.5zM8 19h12c0.55 0 1-0.45 1-1s-0.45-1-1-1H8c-0.55 0-1 0.45-1 1s0.45 1 1 1zm0-6h12c0.55 0 1-0.45 1-1s-0.45-1-1-1H8c-0.55 0-1 0.45-1 1s0.45 1 1 1zM7 6c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1H8c-0.55 0-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatListBulleted;
