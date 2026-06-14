import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-ello",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevEllo {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-ello-1-a)"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M600 300a300 300 0 1 1-600 0 300 300 0 0 1 600 0M300 480c-82 0-153.6-55.5-174.1-135a17.2 17.2 0 0 1 33.2-8.6 145.6 145.6 0 0 0 281.8 0 17.1 17.1 0 1 1 33.2 8.6c-20.5 79.5-92 135-174.1 135","clip-rule":"evenodd"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevEllo;
