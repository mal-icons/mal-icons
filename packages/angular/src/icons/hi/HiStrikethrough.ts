import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-strikethrough",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiStrikethrough {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 12a8.91 8.91 0 0 1-0.32-0.08c-1.58-0.42-2.9-1.25-3.76-2.24-0.87-1.01-1.26-2.19-0.97-3.30.59-2.2 3.66-3.29 6.86-2.43A8.19 8.19 0 0 1 16.5 5.21M6.42 17.81c0.860.99 2.18 1.81 3.76 2.24 3.20.86 6.27-0.23 6.86-2.430.23-0.870.04-1.78-0.46-2.62M3.75 12h16.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiStrikethrough;
