import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-codefactor-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevCodefactorIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M134.3 66.3a66 66 0 0 1-65.6 66.3A66 66 0 0 1 3 66.3 66 66 0 0 1 68.7 0a66 66 0 0 1 65.6 66.3m0 233.7a66 66 0 0 1-65.6 66.3A66 66 0 0 1 3 300a66 66 0 0 1 65.7-66.3 66 66 0 0 1 65.6 66.3m0 233.7A66 66 0 0 1 68.7 600 66 66 0 0 1 3 533.7a66 66 0 0 1 65.7-66.3 66 66 0 0 1 65.6 66.3"}],["path",{"fill":"currentColor","d":"M282.8 0a66 66 0 0 0-65.6 66.3 66 66 0 0 0 65.6 66.3h248.6A66 66 0 0 0 597 66.3 66 66 0 0 0 531.3 0z"}],["path",{"fill":"currentColor","d":"M282.8 233.7a66 66 0 0 0-65.6 66.3 66 66 0 0 0 65.6 66.3h141.9a66 66 0 0 0 65.6-66.3 66 66 0 0 0-65.6-66.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevCodefactorIcon;
