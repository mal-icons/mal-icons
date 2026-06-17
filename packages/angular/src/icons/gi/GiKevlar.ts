import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-kevlar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiKevlar {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M436 439.53V298.35c-30-28.23-60-56.47-60-84.71 0-56.47 30-141.18 120-169.41 0 0-30-28.24-60-28.24h-90c0 56.47-60 84.71-90 84.71s-90-28.23-90-84.7H76c-30 0-60 28.24-60 28.24 90 28.24 120 112.94 120 169.41 0 28.24-30 56.47-60 84.71v141.18c60 28.24 120 56.47 180 56.47s120-28.23 180-56.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiKevlar;
