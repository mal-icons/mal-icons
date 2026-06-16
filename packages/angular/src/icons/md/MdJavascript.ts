import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-javascript",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdJavascript {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 14v-1h1.5v0.5h2v-1H13c-0.55 0-1-0.45-1-1V10c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v1h-1.5v-0.5h-2v1H16c0.55 0 1 0.45 1 1V14c0 0.55-0.45 1-1 1h-3c-0.55 0-1-0.45-1-1zM9 9v4.5H7.5v-1H6v1c0 0.830.67 1.5 1.5 1.5H9c0.83 0 1.5-0.67 1.5-1.5V9H9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdJavascript;
