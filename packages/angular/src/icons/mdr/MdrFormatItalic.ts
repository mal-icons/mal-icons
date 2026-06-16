import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-italic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatItalic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 5.5c0 0.830.67 1.5 1.5 1.5h0.71l-3.42 8H7.5c-0.83 0-1.50.67-1.5 1.5S6.67 18 7.5 18h5c0.83 0 1.5-0.67 1.5-1.5s-0.67-1.5-1.5-1.5h-0.71l3.42-8h1.29c0.83 0 1.5-0.67 1.5-1.5S17.33 4 16.5 4h-5c-0.83 0-1.50.67-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatItalic;
