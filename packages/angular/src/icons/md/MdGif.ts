import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-gif",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdGif {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 9H13v6h-1.5V9zM9 9H6c-0.6 0-1 0.5-1 1v4c0 0.50.4 1 1 1h3c0.6 0 1-0.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-0.5-0.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1h3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdGif;
