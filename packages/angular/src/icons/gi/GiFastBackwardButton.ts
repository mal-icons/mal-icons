import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-fast-backward-button",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFastBackwardButton {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M467.4 106a26 26 0 0 1 25.7 29.3c-16 124-16 117.4 0 241.4a26 26 0 0 1-35.8 27.3l-138.7-57.7c1.2 9.5 2.4 18.9 3.9 30.4 2.5 19.8-17.3 35-35.8 27.3L34.72 280c-9.7-4-16-13.5-16-24s6.3-20 16-24L286.7 108c3.2-1.3 6.6-2 10.1-2 15.60.1 27.7 13.8 25.7 29.3-1.5 11.5-2.7 20.9-3.9 30.4L457.3 108a26 26 0 0 1 10.1-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFastBackwardButton;
