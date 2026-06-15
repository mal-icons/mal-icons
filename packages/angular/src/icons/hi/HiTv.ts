import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-tv",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiTv {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M6 20.25h12m-7.5-3v3m3-3v3m-10.12-3h17.25c0.62 0 1.13-0.5 1.13-1.12V4.88c0-0.62-0.5-1.12-1.12-1.12H3.38c-0.62 0-1.120.5-1.12 1.13v11.25c0 0.620.5 1.13 1.13 1.13Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiTv;
