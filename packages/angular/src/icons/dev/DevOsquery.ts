import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-osquery",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevOsquery {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-osquery-1-a)"}],["path",{"fill":"currentColor","d":"M599.7 0v150.2L449.8 300V149.5z"}],["path",{"fill":"currentColor","d":"M300 0v150.2L449.8 300V149.5z"}],["path",{"fill":"currentColor","d":"M600 599.7H449.8L300 449.8h150.5z"}],["path",{"fill":"currentColor","d":"M600 300H449.8L300 449.8h150.5z"}],["path",{"fill":"currentColor","d":"M0.3 600V449.8L150.2 300v150.5z"}],["path",{"fill":"currentColor","d":"M300 600V449.8L150.2 300v150.5z"}],["path",{"fill":"currentColor","d":"M0 0.3h150.2L300 150.2H149.5z"}],["path",{"fill":"currentColor","d":"M0 300h150.2L300 150H149.5z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevOsquery;
