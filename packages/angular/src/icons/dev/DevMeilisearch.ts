import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-meilisearch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMeilisearch {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m0 475 110.9-283.7a104 104 0 0 1 97-66.2h66.8L164 408.7a104 104 0 0 1-97 66.2z"}],["path",{"fill":"currentColor","d":"m162.6 475 110.9-283.7a104 104 0 0 1 97-66.2h66.9L326.5 408.7a104 104 0 0 1-97 66.2z"}],["path",{"fill":"currentColor","d":"M325.3 475 436 191.2c15.6-40 54.2-66.2 97-66.2h67L489.1 408.7a104 104 0 0 1-97 66.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMeilisearch;
