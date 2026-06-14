import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-dreamhost",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevDreamhost {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M592.3 448.7a324 324 0 0 1-165 41c-177-3.6-317.5-147-314-320.1A307 307 0 0 1 161.9 9.7 313 313 0 0 0 0 276c-3.5 173.3 137.1 316.6 314 320.2a322 322 0 0 0 278.2-147.4"}],["path",{"fill":"currentColor","d":"M424.2 452.5h5.9c46.1 0 91.7-11.4 132.1-33a276.2 276.2 0 0 0-238-415.7 274 274 0 0 0-132.4 34A269 269 0 0 0 151.4 174c-3 150.5 119.3 275.5 272.8 278.6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevDreamhost;
