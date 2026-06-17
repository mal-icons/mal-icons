import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bar-stool",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBarStool {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M116 41c-12.3 13.94-19.27 34.56-21.03 55.75C93.3 116.8 96.31 137 101.9 151h308.2c5.6-14 8.6-34.2 6.9-54.25-1.7-21.19-8.7-41.81-21-55.75H116zm13.9 128L90.2 487h29.9l39.7-318h-29.9zm222.3 0l39.7 318h29.9l-39.7-318h-29.9zM149.9 393l-2 16h216.2l-2-16H149.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBarStool;
