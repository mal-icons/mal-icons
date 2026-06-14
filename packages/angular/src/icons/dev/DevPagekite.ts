import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-pagekite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevPagekite {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M464.7 428.9c67-28 105.4-41.9 105.4-41.9L430 0 30 84.7s8.5 24 22.9 118.5L351.7 136z"}],["path",{"fill":"currentColor","d":"M78.1 396.4A10898 10898 0 0 1 98.3 600a5474 5474 0 0 1 186.9-91.6l-54.8-146.2z"}],["path",{"fill":"currentColor","d":"M58.2 240.6c4.6 32.3 9.6 70.9 15 116.9l181.3-42.7 65.2 177.6q59-27 106-47l-98.1-262z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevPagekite;
