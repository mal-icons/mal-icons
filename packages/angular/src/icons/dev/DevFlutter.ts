import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-flutter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevFlutter {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M357 0 58 298.8l92.5 92.5L542 0zm-2.2 275.5-160 160 92.9 94.2 92.3-92.3 161.9-161.9z"}],["path",{"fill":"currentColor","d":"M287.7 529.7 358 600h183.9l-162-162.6z"}],["path",{"fill":"currentColor","d":"m193.8 436.6 92.5-92.5 93.7 93.3-92.3 92.3z"}],["path",{"fill":"currentColor","fill-opacity":".8","d":"m287.7 529.7 76.8-25.5 7.7-59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevFlutter;
