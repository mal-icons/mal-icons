import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiShare {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M384 64a64 64 0 0 0-64 64 64 64 0 0 0 1.1 11.3l-146.3 73.2A64 64 0 0 0 128 192a64 64 0 0 0-64 64 64 64 0 0 0 64 64 64 64 0 0 0 46.8-20.5L321 372.7a64 64 0 0 0-1 11.3 64 64 0 0 0 64 64 64 64 0 0 0 64-64 64 64 0 0 0-64-64 64 64 0 0 0-46.8 20.5L191 267.4a64 64 0 0 0 1-11.4 64 64 0 0 0-1.1-11.4l146.3-73.1A64 64 0 0 0 384 192a64 64 0 0 0 64-64 64 64 0 0 0-64-64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiShare;
