import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-coderwall",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevCoderwall {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"fill":"currentColor","clip-path":"url(#devicon-coderwall-1-a)"}],["path",{"d":"M66.1 132.3A66.1 66.1 0 1 0 66.1 0a66.1 66.1 0 0 0 0 132.3m233.9 0A66.1 66.1 0 1 0 300 0a66.1 66.1 0 0 0 0 132.3m233.9 0a66.1 66.1 0 1 0 0-132.3 66.1 66.1 0 0 0 0 132.3M300 366.1a66.1 66.1 0 1 0 0-132.2 66.1 66.1 0 0 0 0 132.2m233.9 0a66.1 66.1 0 1 0 0-132.2 66.1 66.1 0 0 0 0 132.2m0 233.9a66.1 66.1 0 1 0 0-132.3 66.1 66.1 0 0 0 0 132.3"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevCoderwall;
