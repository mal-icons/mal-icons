import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-zigzag-hieroglyph",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiZigzagHieroglyph {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M204.3 118.4L152.5 188l-51.3-69.1L20.99 220l21.94 17.4 57.47-72.5 52.1 69.9 51.8-69.4 51.6 69.5 51.7-69.6 51.8 69.6 52-70 57.6 72.5 22-17.4-80.4-101.1-51.2 69-51.8-69.4-51.7 69.4-51.6-69.5zm0 156.4l-51.8 69.3-51.3-68.8-80.17 100.8 21.92 17.4 57.55-72.4 52 69.8 51.8-69.3 51.6 69.3 51.7-69.3 51.8 69.3 52-69.8 57.7 72.4 21.8-17.4-80.3-100.8-51.2 68.8-51.8-69.3-51.7 69.3-51.6-69.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiZigzagHieroglyph;
