import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-alacritty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAlacritty {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.07 0-8.57 21.27h3.6l6.91-16.24 6.91 16.24h3.59l-8.57-21.27zm1.94 9.94c-0.77 1.85-1.53 3.71-2.3 5.57 1.48 4.54 1.48 4.54 2.3 8.5 0.82-3.96 0.82-3.96 2.3-8.5-0.77-1.85-1.53-3.71-2.3-5.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAlacritty;
